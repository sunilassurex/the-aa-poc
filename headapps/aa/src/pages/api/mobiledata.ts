import { NextApiRequest, NextApiResponse } from 'next';
import { LayoutServiceFactory } from 'lib/layout-service-factory';

const mobiledata = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract query parameters with fallbacks
  const item = req.query.item as string;
  const language = (req.query.sc_lang as string) || 'en';
  if (!item) {
    return res.status(400).json({ error: 'Missing required query parameter: item' });
  }
  try {
    // Define the site name for the layout service context
    const siteName = 'mobile-app';
    const layoutServiceFactory = new LayoutServiceFactory();
    const layoutService = layoutServiceFactory.create(siteName);

    const data = await layoutService.fetchLayoutData(item, language);

    if (data) {
      res.status(200).json(data);
      return;
    }

    res.status(404).json({ error: 'No Data Found' });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
};

export default mobiledata;
