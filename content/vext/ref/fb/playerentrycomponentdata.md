---
title: PlayerEntryComponentData
---

Inherits from [EntryComponentData](/vext/ref/fb/entrycomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[PlayerEntryComponentData](#constructor-0)**() |
| **[PlayerEntryComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerEntryComponentData](#constructor-2)**(other: [EntryComponentData](/vext/ref/fb/entrycomponentdata)) |
| **[PlayerEntryComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[PlayerEntryComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PlayerEntryComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PlayerEntryComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animationAccelerationMultiplier" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "antEntryId" >}} | [AntEntryIdEnum](/vext/ref/fb/antentryidenum) |
| {{< prop "antEntryID" >}} | string |
| {{< prop "antEntryEnumeration" >}} | [AntEnumeration](/vext/ref/fb/antenumeration) \| nil |
| {{< prop "shieldedTransitionExitTime" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerEntryComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerEntryComponentData {#constructor-0}

> **PlayerEntryComponentData**()

Creates a new [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata) frostbite instance.

### PlayerEntryComponentData {#constructor-1}

> **PlayerEntryComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerEntryComponentData {#constructor-2}

> **PlayerEntryComponentData**(other: [EntryComponentData](/vext/ref/fb/entrycomponentdata))

Casts an instance of type [EntryComponentData](/vext/ref/fb/entrycomponentdata) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntryComponentData](/vext/ref/fb/entrycomponentdata) | The instance to cast to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). |

### PlayerEntryComponentData {#constructor-3}

> **PlayerEntryComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). |

### PlayerEntryComponentData {#constructor-4}

> **PlayerEntryComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). |

### PlayerEntryComponentData {#constructor-5}

> **PlayerEntryComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). |

### PlayerEntryComponentData {#constructor-6}

> **PlayerEntryComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata). |

## Properties

### {{% prop-heading "animationAccelerationMultiplier" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "antEntryId" %}}

> **[AntEntryIdEnum](/vext/ref/fb/antentryidenum)**

### {{% prop-heading "antEntryID" %}}

> **string**

### {{% prop-heading "antEntryEnumeration" %}}

> **[AntEnumeration](/vext/ref/fb/antenumeration)** \| **nil**

### {{% prop-heading "shieldedTransitionExitTime" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerEntryComponentData](/vext/ref/fb/playerentrycomponentdata) type.

