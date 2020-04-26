---
title: WeaponMiscModifier
---

Inherits from 
[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponMiscModifier](#constructor-0)**() |
| **[WeaponMiscModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponMiscModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponMiscModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enableBreathControl" >}} | bool |
| {{< prop "canBeInSupportedShooting" >}} | bool |
| {{< prop "unZoomOnBoltAction" >}} | bool |
| {{< prop "holdBoltActionUntilZoomRelease" >}} | bool |
| {{< prop "isSilenced" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponMiscModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponMiscModifier {#constructor-0}
> **WeaponMiscModifier**()

Creates a new [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier) frostbite instance.

### WeaponMiscModifier {#constructor-1}
> **WeaponMiscModifier**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponMiscModifier {#constructor-2}
> **WeaponMiscModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier). |

### WeaponMiscModifier {#constructor-3}
> **WeaponMiscModifier**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier). |

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

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier) type.

