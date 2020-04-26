---
title: GameplayBone
---


## Summary
### Constructors
| |
| ----------- |
| **[GameplayBone](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "bone" >}} | [GameplayBones](/vext/ref/fb/gameplaybones) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameplayBone](/vext/ref/fb/gameplaybone) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameplayBone" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameplayBone {#constructor-0}
> **GameplayBone**()

Creates a new [GameplayBone](/vext/ref/fb/gameplaybone) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "bone" %}}
> **[GameplayBones](/vext/ref/fb/gameplaybones)**

## Methods
### Clone
> **Clone**(): [GameplayBone](/vext/ref/fb/gameplaybone)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameplayBone](/vext/ref/fb/gameplaybone)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameplayBone](/vext/ref/fb/gameplaybone) type.

