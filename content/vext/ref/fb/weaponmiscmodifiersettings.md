---
title: WeaponMiscModifierSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponMiscModifierSettings](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enableBreathControl" >}} | bool |
| {{< prop "canBeInSupportedShooting" >}} | bool |
| {{< prop "unZoomOnBoltAction" >}} | bool |
| {{< prop "holdBoltActionUntilZoomRelease" >}} | bool |
| {{< prop "isSilenced" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponMiscModifierSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponMiscModifierSettings {#constructor-0}
> **WeaponMiscModifierSettings**()

Creates a new [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings) frostbite structure.

## Properties
### {{% prop-heading "enableBreathControl" %}}
> **bool**

### {{% prop-heading "canBeInSupportedShooting" %}}
> **bool**

### {{% prop-heading "unZoomOnBoltAction" %}}
> **bool**

### {{% prop-heading "holdBoltActionUntilZoomRelease" %}}
> **bool**

### {{% prop-heading "isSilenced" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings) type.

