# For frontend projects

<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `pnpm dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Conventions and Guidelines
- Use tanstack router features if applicable.
- One file per component.
- Keeping it simple!
- Folder structure should be like this
  - Design follows atomic structure.
  - If there is one big component, the smaller components contributing that big component should be inside `-components` folder if called from a route. Else make a folder and put the components in that folder (For example: `SeriesTableList` component is called by route and it should be inside `-components/series-table-list.tsx` folder. If there is like a smaller component contributing to `series-table-list` like `series-table-row`, then it should be `-components/series-table-list/index.tsx` and `-components/series-table-list/row.tsx` and so on.)
- MOST IMPORTANT RULE is every feature needs to be as PERFORMANT as possible. Performance needs to be top notch.
- NO STRAY UTILITIES FUNCTIONS! Check `/lib/utils` and if the function you are looking for is not there, Add it only inside that folder
- If function is only called once in the entire file, it does not need to be a separate function. Do the function straight from the where it's called, unless it's a big logic.
- Reduce the amount of comment you write, If the function is readable by human and is simple enough, you don't need to comment. Only write comments where there are complexity or exceptional case involved.
