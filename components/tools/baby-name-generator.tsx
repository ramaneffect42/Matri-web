'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Heart, RefreshCw, Dice5, Bookmark } from 'lucide-react'

// Curated list of names for demo purposes
const BABY_NAMES = [
  { name: 'Aurora', gender: 'girl', meaning: 'Dawn', origin: 'Latin' },
  { name: 'Elara', gender: 'girl', meaning: 'Shining, happy', origin: 'Greek' },
  { name: 'Mila', gender: 'girl', meaning: 'Gracious, dear', origin: 'Slavic' },
  { name: 'Nova', gender: 'girl', meaning: 'New', origin: 'Latin' },
  { name: 'Aria', gender: 'girl', meaning: 'Air, melody', origin: 'Italian' },
  { name: 'Luna', gender: 'girl', meaning: 'Moon', origin: 'Latin' },
  { name: 'Isla', gender: 'girl', meaning: 'Island', origin: 'Scottish' },
  { name: 'Maya', gender: 'girl', meaning: 'Water, illusion', origin: 'Sanskrit' },
  { name: 'Freya', gender: 'girl', meaning: 'Lady, noble', origin: 'Old Norse' },
  { name: 'Maeve', gender: 'girl', meaning: 'She who intoxicates', origin: 'Irish' },
  
  { name: 'Leo', gender: 'boy', meaning: 'Lion', origin: 'Latin' },
  { name: 'Julian', gender: 'boy', meaning: 'Youthful', origin: 'Latin' },
  { name: 'Ezra', gender: 'boy', meaning: 'Help', origin: 'Hebrew' },
  { name: 'Silas', gender: 'boy', meaning: 'Of the forest', origin: 'Latin' },
  { name: 'Asher', gender: 'boy', meaning: 'Happy, blessed', origin: 'Hebrew' },
  { name: 'Finn', gender: 'boy', meaning: 'Fair, white', origin: 'Irish' },
  { name: 'Miles', gender: 'boy', meaning: 'Soldier', origin: 'Latin' },
  { name: 'Beckett', gender: 'boy', meaning: 'Bee cottage', origin: 'English' },
  { name: 'Jasper', gender: 'boy', meaning: 'Treasurer', origin: 'Persian' },
  { name: 'Felix', gender: 'boy', meaning: 'Lucky, successful', origin: 'Latin' },
  
  { name: 'Rowan', gender: 'unisex', meaning: 'Little redhead', origin: 'Irish' },
  { name: 'Sage', gender: 'unisex', meaning: 'Wise', origin: 'Latin' },
  { name: 'Quinn', gender: 'unisex', meaning: 'Counsel', origin: 'Irish' },
  { name: 'Eden', gender: 'unisex', meaning: 'Place of pleasure', origin: 'Hebrew' },
  { name: 'Avery', gender: 'unisex', meaning: 'Ruler of the elves', origin: 'English' },
  { name: 'Riley', gender: 'unisex', meaning: 'Courageous', origin: 'Irish' },
  { name: 'Emery', gender: 'unisex', meaning: 'Industrious', origin: 'German' },
  { name: 'River', gender: 'unisex', meaning: 'Flowing body of water', origin: 'English' },
  { name: 'Shiloh', gender: 'unisex', meaning: 'Tranquil', origin: 'Hebrew' },
  { name: 'Wren', gender: 'unisex', meaning: 'Small bird', origin: 'English' },
]

type GenderType = 'all' | 'boy' | 'girl' | 'unisex'
type NameType = typeof BABY_NAMES[0]

export function BabyNameGenerator() {
  const [filter, setFilter] = useState<GenderType>('all')
  const [currentName, setCurrentName] = useState<NameType | null>(null)
  const [favorites, setFavorites] = useState<NameType[]>([])
  const [isRolling, setIsRolling] = useState(false)

  const generateName = () => {
    setIsRolling(true)
    
    // Tiny delay to simulate generating/loading and animation
    setTimeout(() => {
      const filteredList = BABY_NAMES.filter(
        (b) => filter === 'all' || b.gender === filter
      )
      
      // Ensure we don't just show the same name again immediately if possible
      let newName = currentName
      while (newName === currentName && filteredList.length > 1) {
        const randomIndex = Math.floor(Math.random() * filteredList.length)
        newName = filteredList[randomIndex]
      }
      
      if (filteredList.length === 1) newName = filteredList[0]

      setCurrentName(newName)
      setIsRolling(false)
    }, 400)
  }

  const toggleFavorite = (nameObj: NameType) => {
    if (favorites.find((f) => f.name === nameObj.name)) {
      setFavorites(favorites.filter((f) => f.name !== nameObj.name))
    } else {
      setFavorites([...favorites, nameObj])
    }
  }

  const isFavorite = currentName ? favorites.some((f) => f.name === currentName.name) : false

  return (
    <Card className="w-full bg-card border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden rounded-3xl">
      <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-medium">Baby Name Discovery</CardTitle>
              <CardDescription className="text-foreground/70">
                Find the perfect meaningful name for your little one
              </CardDescription>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-background/50 p-1 rounded-xl border border-border/50 self-start sm:self-auto">
            {(['all', 'girl', 'boy', 'unisex'] as const).map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-all ${
                  filter === g 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-8">
        {!currentName ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center border-8 border-background shadow-sm">
              <Dice5 className="w-10 h-10 text-primary/40" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-foreground/80">Ready to discover?</h3>
              <p className="text-sm text-foreground/60 max-w-xs mx-auto">
                Tap the button below to generate beautiful, meaningful names.
              </p>
            </div>
            <Button 
              onClick={generateName} 
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-md shadow-primary/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Names
            </Button>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* The Name Card */}
            <div className={`relative flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl border border-primary/10 transition-all ${isRolling ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => toggleFavorite(currentName)}
                  className="p-3 rounded-full hover:bg-background/80 transition-colors"
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground/40'}`} />
                </button>
              </div>
              
              <Badge variant="outline" className="mb-6 capitalize px-3 py-1 border-primary/20 text-primary bg-primary/5">
                {currentName.gender} Name
              </Badge>
              
              <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6 tracking-tight">
                {currentName.name}
              </h2>
              
              <div className="grid grid-cols-2 gap-8 w-full max-w-xs border-t border-border/50 pt-6 mt-2">
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Origin</p>
                  <p className="text-sm font-medium text-foreground/80">{currentName.origin}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Meaning</p>
                  <p className="text-sm font-medium text-foreground/80">{currentName.meaning}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={generateName} 
                disabled={isRolling}
                size="lg"
                className="flex-1 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-md shadow-primary/20 h-14"
              >
                {isRolling ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Generate Another
                  </>
                )}
              </Button>
            </div>
            
          </div>
        )}

        {/* Favorites List */}
        {favorites.length > 0 && (
          <div className="pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Bookmark className="w-4 h-4 text-foreground/60" />
              <h4 className="text-sm font-medium text-foreground/80">Saved Favorites</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {favorites.map(fav => (
                <div key={fav.name} className="flex items-center gap-2 bg-secondary/30 border border-border/50 rounded-full pl-3 pr-1 py-1 text-sm">
                  <span className="font-medium text-foreground/80">{fav.name}</span>
                  <button 
                    onClick={() => toggleFavorite(fav)}
                    className="p-1 hover:bg-background rounded-full transition-colors text-foreground/40 hover:text-red-500"
                  >
                    <Heart className="w-3 h-3 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </CardContent>
    </Card>
  )
}
