import 'styled-components';
import { Theme } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

---

That's it! This tells TypeScript that styled-components' `DefaultTheme` should have the same structure as your custom theme.

### **File structure should now be:**
```
src/
  components/
  styles/
  styled.d.ts  ← NEW FILE
  App.tsx
  main.tsx
  index.css