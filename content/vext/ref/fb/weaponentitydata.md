---
title: WeaponEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[WeaponEntityData](#constructor-0)**() |
| **[WeaponEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[WeaponEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[WeaponEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[WeaponEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WeaponEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WeaponEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponStates" >}} | [WeaponStateData](/vext/ref/fb/weaponstatedata)[] |
| {{< prop "weaponClass" >}} | [WeaponClassEnum](/vext/ref/fb/weaponclassenum) |
| {{< prop "aiData" >}} | [GameAIWeaponData](/vext/ref/fb/gameaiweapondata) \| nil |
| {{< prop "weaponFiring" >}} | [WeaponFiringData](/vext/ref/fb/weaponfiringdata) \| nil |
| {{< prop "customWeaponType" >}} | [WeaponData](/vext/ref/fb/weapondata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponEntityData {#constructor-0}

> **WeaponEntityData**()

Creates a new [WeaponEntityData](/vext/ref/fb/weaponentitydata) frostbite instance.

### WeaponEntityData {#constructor-1}

> **WeaponEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponEntityData](/vext/ref/fb/weaponentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponEntityData {#constructor-2}

> **WeaponEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

### WeaponEntityData {#constructor-3}

> **WeaponEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

### WeaponEntityData {#constructor-4}

> **WeaponEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

### WeaponEntityData {#constructor-5}

> **WeaponEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

### WeaponEntityData {#constructor-6}

> **WeaponEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

### WeaponEntityData {#constructor-7}

> **WeaponEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponEntityData](/vext/ref/fb/weaponentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponEntityData](/vext/ref/fb/weaponentitydata). |

## Properties

### {{% prop-heading "weaponStates" %}}

> **[WeaponStateData](/vext/ref/fb/weaponstatedata)**[]

### {{% prop-heading "weaponClass" %}}

> **[WeaponClassEnum](/vext/ref/fb/weaponclassenum)**

### {{% prop-heading "aiData" %}}

> **[GameAIWeaponData](/vext/ref/fb/gameaiweapondata)** \| **nil**

### {{% prop-heading "weaponFiring" %}}

> **[WeaponFiringData](/vext/ref/fb/weaponfiringdata)** \| **nil**

### {{% prop-heading "customWeaponType" %}}

> **[WeaponData](/vext/ref/fb/weapondata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponEntityData](/vext/ref/fb/weaponentitydata) type.

