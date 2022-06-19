interface JobInterface {
  id: number;
  company: string;
  contract: string;
  level: string;
  location: string;
  position: string;
  logo: string;
  postedAt: string;
  role: string;
  featured: boolean;
  new: boolean;
  languages: string[];
  tools: string[];
}

export default JobInterface;
