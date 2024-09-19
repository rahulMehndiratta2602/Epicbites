import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
const s3 = new S3({
    region: 'ap-south-1'
});
const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Loading Meals Failed🧨🧨🧨');
    return db.prepare('SELECT * FROM meals').all();
}
export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
}

// export async function saveMeal(meal) {

//     meal.slug = slugify(meal.title, { lower: true });
//     meal.instructions = xss(meal.instructions);
//     const imgExtension = meal.image.name.split('.').pop();
//     const imgName = `${meal.slug}.${imgExtension}`;
//     const stream = fs.createWriteStream(`public/images/${imgName}`);
//     const bufferedImage = await meal.image.arrayBuffer();
//     stream.write(Buffer.from(bufferedImage), (error) => {
//         if (error) {
//             throw new Error('💥SAVING IMAGE FAILED💥');
//         }
//     });
//     meal.image = `/images/${imgName}`;
//     // console.log(meal);
//     db.prepare(`
//         INSERT into meals
//         (slug,
//         title,
//         image,
//         summary,
//         instructions,
//         creator,
//         creator_email)
//         VALUES
//         (@slug,
//          @title,
//          @image,
//          @summary,
//          @instructions,
//          @creator,
//          @creator_email)
//         `).run(meal);
// }
export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const bufferedImage = await meal.image.arrayBuffer();

    s3.putObject({
        Bucket: 'epicfoods',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
    });


    meal.image = fileName;

    db.prepare(
        `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
    ).run(meal);
}