---
title: CharacterWeaponBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[CharacterWeaponBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weaponId" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterWeaponBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterWeaponBinding {#constructor-0}
> **CharacterWeaponBinding**()

Creates a new [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) frostbite structure.

## Properties
### {{% prop-heading "weaponId" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) type.

