---
title: BreakablePartComponentData
---

Inherits from [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[BreakablePartComponentData](#constructor-0)**() |
| **[BreakablePartComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BreakablePartComponentData](#constructor-2)**(other: [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata)) |
| **[BreakablePartComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[BreakablePartComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[BreakablePartComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[BreakablePartComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "healthPercentage" >}} | int |
| {{< prop "collapsable" >}} | bool |
| {{< prop "destroyNearbyStaticEntities" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BreakablePartComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BreakablePartComponentData {#constructor-0}

> **BreakablePartComponentData**()

Creates a new [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata) frostbite instance.

### BreakablePartComponentData {#constructor-1}

> **BreakablePartComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BreakablePartComponentData {#constructor-2}

> **BreakablePartComponentData**(other: [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata))

Casts an instance of type [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata) | The instance to cast to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). |

### BreakablePartComponentData {#constructor-3}

> **BreakablePartComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). |

### BreakablePartComponentData {#constructor-4}

> **BreakablePartComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). |

### BreakablePartComponentData {#constructor-5}

> **BreakablePartComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). |

### BreakablePartComponentData {#constructor-6}

> **BreakablePartComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata). |

## Properties

### {{% prop-heading "healthPercentage" %}}

> **int**

### {{% prop-heading "collapsable" %}}

> **bool**

### {{% prop-heading "destroyNearbyStaticEntities" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata) type.

