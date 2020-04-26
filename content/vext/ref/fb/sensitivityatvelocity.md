---
title: SensitivityAtVelocity
---


## Summary
### Constructors
| |
| ----------- |
| **[SensitivityAtVelocity](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "steeringSensitivity" >}} | float |
| {{< prop "velocity" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensitivityAtVelocity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensitivityAtVelocity {#constructor-0}
> **SensitivityAtVelocity**()

Creates a new [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) frostbite structure.

## Properties
### {{% prop-heading "steeringSensitivity" %}}
> **float**

### {{% prop-heading "velocity" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) type.

