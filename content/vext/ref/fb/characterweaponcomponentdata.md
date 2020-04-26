---
title: CharacterWeaponComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[CharacterWeaponComponentData](#constructor-0)**() |
| **[CharacterWeaponComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterWeaponComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CharacterWeaponComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterWeaponComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterWeaponComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultWeaponBlueprint" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "aimBoneName" >}} | string |
| {{< prop "weaponSkeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterWeaponComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterWeaponComponentData {#constructor-0}

> **CharacterWeaponComponentData**()

Creates a new [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata) frostbite instance.

### CharacterWeaponComponentData {#constructor-1}

> **CharacterWeaponComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterWeaponComponentData {#constructor-2}

> **CharacterWeaponComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). |

### CharacterWeaponComponentData {#constructor-3}

> **CharacterWeaponComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). |

### CharacterWeaponComponentData {#constructor-4}

> **CharacterWeaponComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). |

### CharacterWeaponComponentData {#constructor-5}

> **CharacterWeaponComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata). |

## Properties

### {{% prop-heading "defaultWeaponBlueprint" %}}

> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** \| **nil**

### {{% prop-heading "aimBoneName" %}}

> **string**

### {{% prop-heading "weaponSkeleton" %}}

> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata) type.

