---
title: BFServerConfiguration
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BFServerConfiguration](#constructor-0)**() |
| **[BFServerConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BFServerConfiguration](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "schedules" >}} | [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BFServerConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BFServerConfiguration {#constructor-0}

> **BFServerConfiguration**()

Creates a new [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) frostbite instance.

### BFServerConfiguration {#constructor-1}

> **BFServerConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BFServerConfiguration {#constructor-2}

> **BFServerConfiguration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration). |

## Properties

### {{% prop-heading "schedules" %}}

> **[BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) type.

