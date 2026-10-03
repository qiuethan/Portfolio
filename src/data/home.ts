import { experience } from './experience';
import { projects } from './projects';

// Deliberate homepage selections, independent of the library's ordering.
function selectById<T extends { id: string }>(items: T[], ids: string[]): T[] {
  return ids.map((id) => {
    const item = items.find((entry) => entry.id === id);
    if (!item) throw new Error(`Unknown homepage entry: ${id}`);
    return item;
  });
}

export const currentRoles = selectById(experience, ['shopify', 'utmist-vp']);
export const currentProjects = selectById(projects, ['misty', 'mist', 'utmist']);
export const selectedProjects = selectById(projects, [
  'canopy',
  'chatgpu',
  'identity-matrix',
  'cybermetrics',
  'heimer-academy',
  'frame',
]);
export const pastRoles = experience.filter((role) => role.featured && !currentRoles.includes(role));
