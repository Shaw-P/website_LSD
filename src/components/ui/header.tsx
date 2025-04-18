import { Github, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function Header() {
  const menuItems = ['Products', 'About', 'Team', 'Contact'];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-black/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-white font-bold text-2xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        LSD
      </motion.div>
      
      {/* Desktop Navigation */}
      <motion.nav 
        className="hidden md:flex items-center gap-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {menuItems.map((item) => (
          <Button 
            key={item}
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            {item}
          </Button>
        ))}
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item}>
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}