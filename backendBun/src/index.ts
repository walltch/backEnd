import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const post = await prisma.post.create({
      data: {
        title: 'My post',
        body: 'Content of the post',
        slug: 'my-post',
        userId: '652f9b1f5a826aaed8ddde76',
        name: 'Author Name',
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    console.dir(allUsers, { depth: null });
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error('Failed to execute main function:', error);
  })
  .finally(() => {
    process.exit(0);
  });
