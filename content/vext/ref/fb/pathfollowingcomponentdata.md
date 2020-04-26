---
title: PathFollowingComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[PathFollowingComponentData](#constructor-0)**() |
| **[PathFollowingComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PathFollowingComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[PathFollowingComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PathFollowingComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PathFollowingComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "updatePathAtDistancePercent" >}} | float |
| {{< prop "preferredPathfindingIndex" >}} | int |
| {{< prop "alternatePathfindingIndices" >}} | int[] |
| {{< prop "movementCorridorRadius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PathFollowingComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PathFollowingComponentData {#constructor-0}
> **PathFollowingComponentData**()

Creates a new [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata) frostbite instance.

### PathFollowingComponentData {#constructor-1}
> **PathFollowingComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PathFollowingComponentData {#constructor-2}
> **PathFollowingComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). |

### PathFollowingComponentData {#constructor-3}
> **PathFollowingComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). |

### PathFollowingComponentData {#constructor-4}
> **PathFollowingComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). |

### PathFollowingComponentData {#constructor-5}
> **PathFollowingComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata). |

## Properties
### {{% prop-heading "updatePathAtDistancePercent" %}}
> **float**

### {{% prop-heading "preferredPathfindingIndex" %}}
> **int**

### {{% prop-heading "alternatePathfindingIndices" %}}
> **int**[]

### {{% prop-heading "movementCorridorRadius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata) type.

