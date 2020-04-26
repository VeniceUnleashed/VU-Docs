---
title: AreaValueTeam
---


## Summary
### Constructors
| |
| ----------- |
| **[AreaValueTeam](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "areaValue" >}} | int |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AreaValueTeam](/vext/ref/fb/areavalueteam) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AreaValueTeam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AreaValueTeam {#constructor-0}
> **AreaValueTeam**()

Creates a new [AreaValueTeam](/vext/ref/fb/areavalueteam) frostbite structure.

## Properties
### {{% prop-heading "areaValue" %}}
> **int**

### {{% prop-heading "team" %}}
> **[TeamId](/vext/ref/fb/teamid)**

## Methods
### Clone
> **Clone**(): [AreaValueTeam](/vext/ref/fb/areavalueteam)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AreaValueTeam](/vext/ref/fb/areavalueteam)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AreaValueTeam](/vext/ref/fb/areavalueteam) type.

