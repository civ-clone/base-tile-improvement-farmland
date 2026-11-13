# base-tile-improvement-farmland

The `Farmland` tile improvement: farmland on a square.

A tile improvement built on an irrigated square, which a game's rules may make yield more food.

For example: Civ2: Farmland, built over Irrigation once Refrigeration is known; a Supermarket makes it count.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import Farmland from '@civ-clone/base-tile-improvement-farmland/Farmland';
import { instance as availableTileImprovementRegistryInstance } from '@civ-clone/core-tile-improvement/AvailableTileImprovementRegistry';

availableTileImprovementRegistryInstance.register(Farmland);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).
