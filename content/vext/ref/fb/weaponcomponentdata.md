---
title: WeaponComponentData
---

Inherits from 
[PartComponentData](/vext/ref/fb/partcomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponComponentData](#constructor-0)**() |
| **[WeaponComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponComponentData](#constructor-2)**(other: [PartComponentData](/vext/ref/fb/partcomponentdata)) |
| **[WeaponComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[WeaponComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WeaponComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WeaponComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "projectileSpawnOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "impulseStrength" >}} | float |
| {{< prop "weaponMesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "weaponFiring" >}} | [WeaponFiringData](/vext/ref/fb/weaponfiringdata) \| nil |
| {{< prop "damageGiverName" >}} | string |
| {{< prop "aiData" >}} | [GameAIWeaponData](/vext/ref/fb/gameaiweapondata) \| nil |
| {{< prop "customWeaponType" >}} | [WeaponData](/vext/ref/fb/weapondata) \| nil |
| {{< prop "classification" >}} | [WeaponClassification](/vext/ref/fb/weaponclassification) |
| {{< prop "explosionDamageMultiplier" >}} | float |
| {{< prop "reloadTimeMultiplier" >}} | float |
| {{< prop "damageMultiplier" >}} | float |
| {{< prop "weaponItemHash" >}} | int |
| {{< prop "overheatDropPerSecondMultiplier" >}} | float |
| {{< prop "lockTimeMultiplier" >}} | float |
| {{< prop "lockingAcceptanceAngleMultiplier" >}} | float |
| {{< prop "sequentialFiring" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponComponentData {#constructor-0}
> **WeaponComponentData**()

Creates a new [WeaponComponentData](/vext/ref/fb/weaponcomponentdata) frostbite instance.

### WeaponComponentData {#constructor-1}
> **WeaponComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponComponentData](/vext/ref/fb/weaponcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponComponentData {#constructor-2}
> **WeaponComponentData**(other: [PartComponentData](/vext/ref/fb/partcomponentdata))

Casts an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PartComponentData](/vext/ref/fb/partcomponentdata) | The instance to cast to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). |

### WeaponComponentData {#constructor-3}
> **WeaponComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). |

### WeaponComponentData {#constructor-4}
> **WeaponComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). |

### WeaponComponentData {#constructor-5}
> **WeaponComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). |

### WeaponComponentData {#constructor-6}
> **WeaponComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata). |

## Properties
### {{% prop-heading "projectileSpawnOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "impulseStrength" %}}
> **float**

### {{% prop-heading "weaponMesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "weaponFiring" %}}
> **[WeaponFiringData](/vext/ref/fb/weaponfiringdata)** | **nil**

### {{% prop-heading "damageGiverName" %}}
> **string**

### {{% prop-heading "aiData" %}}
> **[GameAIWeaponData](/vext/ref/fb/gameaiweapondata)** | **nil**

### {{% prop-heading "customWeaponType" %}}
> **[WeaponData](/vext/ref/fb/weapondata)** | **nil**

### {{% prop-heading "classification" %}}
> **[WeaponClassification](/vext/ref/fb/weaponclassification)**

### {{% prop-heading "explosionDamageMultiplier" %}}
> **float**

### {{% prop-heading "reloadTimeMultiplier" %}}
> **float**

### {{% prop-heading "damageMultiplier" %}}
> **float**

### {{% prop-heading "weaponItemHash" %}}
> **int**

### {{% prop-heading "overheatDropPerSecondMultiplier" %}}
> **float**

### {{% prop-heading "lockTimeMultiplier" %}}
> **float**

### {{% prop-heading "lockingAcceptanceAngleMultiplier" %}}
> **float**

### {{% prop-heading "sequentialFiring" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponComponentData](/vext/ref/fb/weaponcomponentdata) type.

