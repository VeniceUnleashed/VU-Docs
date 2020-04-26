---
title: EloParameters
---


## Summary
### Constructors
| |
| ----------- |
| **[EloParameters](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "kWinner" >}} | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)[] |
| {{< prop "kLoser" >}} | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)[] |
| {{< prop "kNewbie" >}} | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)[] |
| {{< prop "kCompetitor" >}} | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)[] |
| {{< prop "expected" >}} | [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EloParameters](/vext/ref/fb/eloparameters) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EloParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EloParameters {#constructor-0}
> **EloParameters**()

Creates a new [EloParameters](/vext/ref/fb/eloparameters) frostbite structure.

## Properties
### {{% prop-heading "kWinner" %}}
> **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)**[]

### {{% prop-heading "kLoser" %}}
> **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)**[]

### {{% prop-heading "kNewbie" %}}
> **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)**[]

### {{% prop-heading "kCompetitor" %}}
> **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)**[]

### {{% prop-heading "expected" %}}
> **[EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint)**[]

## Methods
### Clone
> **Clone**(): [EloParameters](/vext/ref/fb/eloparameters)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EloParameters](/vext/ref/fb/eloparameters)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EloParameters](/vext/ref/fb/eloparameters) type.

