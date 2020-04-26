---
title: WeaponLagBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponLagBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entityPitch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "entityYaw" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "pitchResult" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "yawResult" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "rollResult" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponLagBinding](/vext/ref/fb/weaponlagbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponLagBinding {#constructor-0}
> **WeaponLagBinding**()

Creates a new [WeaponLagBinding](/vext/ref/fb/weaponlagbinding) frostbite structure.

## Properties
### {{% prop-heading "entityPitch" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "entityYaw" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "pitchResult" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "yawResult" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "rollResult" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [WeaponLagBinding](/vext/ref/fb/weaponlagbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponLagBinding](/vext/ref/fb/weaponlagbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponLagBinding](/vext/ref/fb/weaponlagbinding) type.

