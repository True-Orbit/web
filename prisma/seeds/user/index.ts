import * as fixtures from './fixtures';
import * as factories from './factories';

export * from './factories';
export * from './fixtures';

const { BRUCE_WAYNE } = fixtures;

export const seed = async (prisma: any) => {
  const BruceWayne = await prisma.user.upsert({
    where: { email: BRUCE_WAYNE.email },
    update: { ...BRUCE_WAYNE },
    create: { ...BRUCE_WAYNE },
  });
  
  for (let i = 0; i < 10; i++) {
    const randomUser = factories.randomUser();
    await prisma.user.upsert({
      where: { email: randomUser.email },
      create: { ...randomUser },
      update: { ...randomUser },
    });
  }
};
