---
title: PackagingCellData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[PackagingCellData](#constructor-0)**() |
| **[PackagingCellData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PackagingCellData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PackagingCellData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PackagingCellData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PackagingCellData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rules" >}} | [PackagingRule](/vext/ref/fb/packagingrule)[] |
| {{< prop "targets" >}} | [PackagingCellData](/vext/ref/fb/packagingcelldata)[] |
| {{< prop "shape" >}} | [Vec2](/vext/ref/shared/type/vec2)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PackagingCellData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PackagingCellData {#constructor-0}

> **PackagingCellData**()

Creates a new [PackagingCellData](/vext/ref/fb/packagingcelldata) frostbite instance.

### PackagingCellData {#constructor-1}

> **PackagingCellData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PackagingCellData](/vext/ref/fb/packagingcelldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PackagingCellData {#constructor-2}

> **PackagingCellData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PackagingCellData](/vext/ref/fb/packagingcelldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PackagingCellData](/vext/ref/fb/packagingcelldata). |

### PackagingCellData {#constructor-3}

> **PackagingCellData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PackagingCellData](/vext/ref/fb/packagingcelldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PackagingCellData](/vext/ref/fb/packagingcelldata). |

### PackagingCellData {#constructor-4}

> **PackagingCellData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PackagingCellData](/vext/ref/fb/packagingcelldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PackagingCellData](/vext/ref/fb/packagingcelldata). |

### PackagingCellData {#constructor-5}

> **PackagingCellData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PackagingCellData](/vext/ref/fb/packagingcelldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PackagingCellData](/vext/ref/fb/packagingcelldata). |

## Properties

### {{% prop-heading "rules" %}}

> **[PackagingRule](/vext/ref/fb/packagingrule)**[]

### {{% prop-heading "targets" %}}

> **[PackagingCellData](/vext/ref/fb/packagingcelldata)**[]

### {{% prop-heading "shape" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PackagingCellData](/vext/ref/fb/packagingcelldata) type.

