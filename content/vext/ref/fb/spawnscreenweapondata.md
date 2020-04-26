---
title: SpawnScreenWeaponData
---


## Summary
### Constructors
| |
| ----------- |
| **[SpawnScreenWeaponData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weaponName" >}} | string |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpawnScreenWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpawnScreenWeaponData {#constructor-0}
> **SpawnScreenWeaponData**()

Creates a new [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata) frostbite structure.

## Properties
### {{% prop-heading "weaponName" %}}
> **string**

### {{% prop-heading "texture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

## Methods
### Clone
> **Clone**(): [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata) type.

