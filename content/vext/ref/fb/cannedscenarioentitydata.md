---
title: CannedScenarioEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[CannedScenarioEntityData](#constructor-0)**() |
| **[CannedScenarioEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CannedScenarioEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CannedScenarioEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CannedScenarioEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CannedScenarioEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cannedAnimBinding" >}} | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) |
| {{< prop "animationEntitySpacePriority" >}} | int |
| {{< prop "alwaysClearEntitySpaceWhenInScenario" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CannedScenarioEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CannedScenarioEntityData {#constructor-0}

> **CannedScenarioEntityData**()

Creates a new [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata) frostbite instance.

### CannedScenarioEntityData {#constructor-1}

> **CannedScenarioEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CannedScenarioEntityData {#constructor-2}

> **CannedScenarioEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). |

### CannedScenarioEntityData {#constructor-3}

> **CannedScenarioEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). |

### CannedScenarioEntityData {#constructor-4}

> **CannedScenarioEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). |

### CannedScenarioEntityData {#constructor-5}

> **CannedScenarioEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata). |

## Properties

### {{% prop-heading "cannedAnimBinding" %}}

> **[CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)**

### {{% prop-heading "animationEntitySpacePriority" %}}

> **int**

### {{% prop-heading "alwaysClearEntitySpaceWhenInScenario" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata) type.

