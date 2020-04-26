---
title: LevelSetup
---


## Summary
### Constructors
| |
| ----------- |
| **[LevelSetup](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "inclusionOptions" >}} | [LevelSetupOption](/vext/ref/fb/levelsetupoption)[] |
| {{< prop "difficultyIndex" >}} | int |
| {{< prop "subLevelNames" >}} | string[] |
| {{< prop "subLevelStates" >}} | int[] |
| {{< prop "isSaveGame" >}} | bool |
| {{< prop "forceReloadResources" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LevelSetup](/vext/ref/fb/levelsetup) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LevelSetup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LevelSetup {#constructor-0}
> **LevelSetup**()

Creates a new [LevelSetup](/vext/ref/fb/levelsetup) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "inclusionOptions" %}}
> **[LevelSetupOption](/vext/ref/fb/levelsetupoption)**[]

### {{% prop-heading "difficultyIndex" %}}
> **int**

### {{% prop-heading "subLevelNames" %}}
> **string**[]

### {{% prop-heading "subLevelStates" %}}
> **int**[]

### {{% prop-heading "isSaveGame" %}}
> **bool**

### {{% prop-heading "forceReloadResources" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [LevelSetup](/vext/ref/fb/levelsetup)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LevelSetup](/vext/ref/fb/levelsetup)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LevelSetup](/vext/ref/fb/levelsetup) type.

