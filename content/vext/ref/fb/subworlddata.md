---
title: SubWorldData
---

Inherits from [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint)

## Summary

### Constructors

|  |
| --- |
| **[SubWorldData](#constructor-0)**() |
| **[SubWorldData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SubWorldData](#constructor-2)**(other: [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint)) |
| **[SubWorldData](#constructor-3)**(other: [PrefabBlueprint](/vext/ref/fb/prefabblueprint)) |
| **[SubWorldData](#constructor-4)**(other: [Blueprint](/vext/ref/fb/blueprint)) |
| **[SubWorldData](#constructor-5)**(other: [EntityBusData](/vext/ref/fb/entitybusdata)) |
| **[SubWorldData](#constructor-6)**(other: [DataBusData](/vext/ref/fb/databusdata)) |
| **[SubWorldData](#constructor-7)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SubWorldData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "registryContainer" >}} | [RegistryContainer](/vext/ref/fb/registrycontainer) \| nil |
| {{< prop "isWin32SubLevel" >}} | bool |
| {{< prop "isXenonSubLevel" >}} | bool |
| {{< prop "isPs3SubLevel" >}} | bool |
| {{< prop "rememberStateOnStreamOut" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubWorldData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubWorldData {#constructor-0}

> **SubWorldData**()

Creates a new [SubWorldData](/vext/ref/fb/subworlddata) frostbite instance.

### SubWorldData {#constructor-1}

> **SubWorldData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubWorldData](/vext/ref/fb/subworlddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SubWorldData {#constructor-2}

> **SubWorldData**(other: [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint))

Casts an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-3}

> **SubWorldData**(other: [PrefabBlueprint](/vext/ref/fb/prefabblueprint))

Casts an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PrefabBlueprint](/vext/ref/fb/prefabblueprint) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-4}

> **SubWorldData**(other: [Blueprint](/vext/ref/fb/blueprint))

Casts an instance of type [Blueprint](/vext/ref/fb/blueprint) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Blueprint](/vext/ref/fb/blueprint) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-5}

> **SubWorldData**(other: [EntityBusData](/vext/ref/fb/entitybusdata))

Casts an instance of type [EntityBusData](/vext/ref/fb/entitybusdata) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusData](/vext/ref/fb/entitybusdata) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-6}

> **SubWorldData**(other: [DataBusData](/vext/ref/fb/databusdata))

Casts an instance of type [DataBusData](/vext/ref/fb/databusdata) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataBusData](/vext/ref/fb/databusdata) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-7}

> **SubWorldData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

### SubWorldData {#constructor-8}

> **SubWorldData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SubWorldData](/vext/ref/fb/subworlddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SubWorldData](/vext/ref/fb/subworlddata). |

## Properties

### {{% prop-heading "registryContainer" %}}

> **[RegistryContainer](/vext/ref/fb/registrycontainer)** \| **nil**

### {{% prop-heading "isWin32SubLevel" %}}

> **bool**

### {{% prop-heading "isXenonSubLevel" %}}

> **bool**

### {{% prop-heading "isPs3SubLevel" %}}

> **bool**

### {{% prop-heading "rememberStateOnStreamOut" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubWorldData](/vext/ref/fb/subworlddata) type.

