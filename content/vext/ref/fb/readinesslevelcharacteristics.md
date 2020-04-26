---
title: ReadinessLevelCharacteristics
---


## Summary
### Constructors
| |
| ----------- |
| **[ReadinessLevelCharacteristics](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minReactionTime" >}} | float |
| {{< prop "maxReactionTime" >}} | float |
| {{< prop "reductionTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReadinessLevelCharacteristics" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReadinessLevelCharacteristics {#constructor-0}
> **ReadinessLevelCharacteristics**()

Creates a new [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) frostbite structure.

## Properties
### {{% prop-heading "minReactionTime" %}}
> **float**

### {{% prop-heading "maxReactionTime" %}}
> **float**

### {{% prop-heading "reductionTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) type.

