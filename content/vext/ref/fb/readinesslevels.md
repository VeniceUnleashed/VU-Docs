---
title: ReadinessLevels
---


## Summary
### Constructors
| |
| ----------- |
| **[ReadinessLevels](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "patrol" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |
| {{< prop "ready" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |
| {{< prop "combat" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ReadinessLevels](/vext/ref/fb/readinesslevels) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReadinessLevels" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReadinessLevels {#constructor-0}
> **ReadinessLevels**()

Creates a new [ReadinessLevels](/vext/ref/fb/readinesslevels) frostbite structure.

## Properties
### {{% prop-heading "patrol" %}}
> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

### {{% prop-heading "ready" %}}
> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

### {{% prop-heading "combat" %}}
> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

## Methods
### Clone
> **Clone**(): [ReadinessLevels](/vext/ref/fb/readinesslevels)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ReadinessLevels](/vext/ref/fb/readinesslevels)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReadinessLevels](/vext/ref/fb/readinesslevels) type.

