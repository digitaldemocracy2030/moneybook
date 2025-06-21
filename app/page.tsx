import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Notice } from '@/components/Notice';
import demoComingsoon, {
  comingSoonId,
  comingSoonNum,
} from '@/data/demo-comingsoon';
import demoExample from '@/data/demo-example';
import demoKokiFujisaki from '@/data/demo-kokifujisaki';
import demoRyosukeIdei from '@/data/demo-ryosukeidei';
import demoTakahiroAnno from '@/data/demo-takahiroanno';
import type { ProfileList } from '@/models/type';
import {
  Badge,
  Box,
  Card,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

type Entry = {
  id: string;
  latestReportId: string;
  profile: ProfileList;
};
const entries: Entry[] = [
  demoTakahiroAnno,
  demoRyosukeIdei,
  demoKokiFujisaki,
  demoExample,
  ...Array.from({ length: comingSoonNum }, (_, i) => ({
    ...demoComingsoon,
    id: `${comingSoonId}-${i}`,
    latestReportId: `${comingSoonId}-${i}`,
  })),
];

export const metadata = {
  title: 'Polimoney - 政治資金の透明性を高める',
  description:
    'Polimoneyは、デジタル民主主義2030プロジェクトの一環として、政治資金の透明性を高めるために開発されたオープンソースのプロジェクトです。',
};

export default function Page() {
  return (
    <Box>
      <Header />
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mb={5} p={2}>
        {entries.map((entry) => (
          <Link
            href={
              !entry.latestReportId.startsWith(comingSoonId)
                ? `/${entry.latestReportId}`
                : '#'
            }
            key={entry.latestReportId}
          >
            <Card.Root
              flexDirection="row"
              boxShadow="xs"
              border="none"
              alignItems="center"
            >
              <Image
                objectFit="cover"
                maxW="130px"
                src={entry.profile.image}
                alt={entry.profile.name}
                borderTopLeftRadius="md"
                borderBottomLeftRadius="md"
              />
              <Box>
                <Card.Body>
                  <Stack gap={0}>
                    <Text fontSize="xs">{entry.profile.title}</Text>
                    <Text fontSize="2xl" fontWeight="bold">
                      {entry.profile.name}
                    </Text>
                    <HStack mt={1}>
                      {entry.profile.party && (
                        <Badge variant="outline" colorPalette="red">
                          {entry.profile.party}
                        </Badge>
                      )}
                      {entry.profile.district && (
                        <Badge variant="outline">
                          {entry.profile.district}
                        </Badge>
                      )}
                    </HStack>
                  </Stack>
                </Card.Body>
              </Box>
            </Card.Root>
          </Link>
        ))}
      </SimpleGrid>
      <Notice />
      <Footer />
    </Box>
  );
}
