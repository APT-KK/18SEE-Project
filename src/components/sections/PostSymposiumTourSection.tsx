import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Tajmahal from "@/assets/Taj-Mahal-Agra-India.webp";
import Jaipur from "@/assets/Jaipur city.jpg";
import Garhwal from "@/assets/garhwal.jpg";

const tourDestinations = [
  {
    name: "Taj Mahal, Agra",
    image: Tajmahal,
    description: "Marvel at the iconic symbol of love and India's most famous monument."
  },
  {
    name: "Pink City, Jaipur",
    image: Jaipur,
    description: "Explore the vibrant culture, palaces, and forts of Rajasthan's capital."
  },
  {
    name: "Garhwal Lesser Himalayas",
    image: Garhwal,
    description: "Experience the serene beauty and adventure of the Himalayan foothills."
  }
];

export const PostSymposiumTourSection = () => (
  <section id="post-symposium-tour" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 animate-fade-in">
        <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-lg px-4 py-2">
          Post-Symposium Tour
        </Badge>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Explore India Beyond the Symposium
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          If a sufficient number of delegates express interest, a post-symposium tour will be organized to prominent destinations including the Taj Mahal (Agra), the Pink City (Jaipur), and the Garhwal Lesser Himalayas. Interested delegates are requested to contact the Organizing Secretary for further details.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {tourDestinations.map((dest, idx) => (
          <Card key={idx} className="border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <CardContent className="p-0">
              <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{dest.name}</h3>
                <p className="text-muted-foreground text-base mb-2">{dest.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10 animate-fade-in">
        <span className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-lg font-semibold">
          Interested delegates are requested to contact the Organizing Secretary for further details.
        </span>
      </div>
    </div>
  </section>
);
