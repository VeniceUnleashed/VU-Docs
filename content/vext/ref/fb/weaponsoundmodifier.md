---
title: WeaponSoundModifier
---

Inherits from 
[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponSoundModifier](#constructor-0)**() |
| **[WeaponSoundModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponSoundModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponSoundModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponSoundModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponSoundModifier {#constructor-0}
> **WeaponSoundModifier**()

Creates a new [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier) frostbite instance.

### WeaponSoundModifier {#constructor-1}
> **WeaponSoundModifier**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponSoundModifier {#constructor-2}
> **WeaponSoundModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier). |

### WeaponSoundModifier {#constructor-3}
> **WeaponSoundModifier**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier). |

## Properties
### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier) type.

