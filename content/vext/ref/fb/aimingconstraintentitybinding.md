---
title: AimingConstraintEntityBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AimingConstraintEntityBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "proneAimLimit" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "proneAimDistance" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AimingConstraintEntityBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AimingConstraintEntityBinding {#constructor-0}
> **AimingConstraintEntityBinding**()

Creates a new [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) frostbite structure.

## Properties
### {{% prop-heading "proneAimLimit" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "proneAimDistance" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) type.

