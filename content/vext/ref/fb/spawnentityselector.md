---
title: SpawnEntitySelector
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SpawnEntitySelector](#constructor-0)**() |
| **[SpawnEntitySelector](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpawnEntitySelector](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnEntitySelector" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnEntitySelector {#constructor-0}

> **SpawnEntitySelector**()

Creates a new [SpawnEntitySelector](/vext/ref/fb/spawnentityselector) frostbite instance.

### SpawnEntitySelector {#constructor-1}

> **SpawnEntitySelector**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpawnEntitySelector](/vext/ref/fb/spawnentityselector) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpawnEntitySelector {#constructor-2}

> **SpawnEntitySelector**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpawnEntitySelector](/vext/ref/fb/spawnentityselector). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpawnEntitySelector](/vext/ref/fb/spawnentityselector). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpawnEntitySelector](/vext/ref/fb/spawnentityselector) type.

