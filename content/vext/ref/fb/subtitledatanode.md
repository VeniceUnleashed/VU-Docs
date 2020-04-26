---
title: SubtitleDataNode
---

Inherits from [TreeNodeBase](/vext/ref/fb/treenodebase)

## Summary

### Constructors

|  |
| --- |
| **[SubtitleDataNode](#constructor-0)**() |
| **[SubtitleDataNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SubtitleDataNode](#constructor-2)**(other: [TreeNodeBase](/vext/ref/fb/treenodebase)) |
| **[SubtitleDataNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "displayTime" >}} | float |
| {{< prop "siD1" >}} | string |
| {{< prop "siD2" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubtitleDataNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubtitleDataNode {#constructor-0}

> **SubtitleDataNode**()

Creates a new [SubtitleDataNode](/vext/ref/fb/subtitledatanode) frostbite instance.

### SubtitleDataNode {#constructor-1}

> **SubtitleDataNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubtitleDataNode](/vext/ref/fb/subtitledatanode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SubtitleDataNode {#constructor-2}

> **SubtitleDataNode**(other: [TreeNodeBase](/vext/ref/fb/treenodebase))

Casts an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase) to [SubtitleDataNode](/vext/ref/fb/subtitledatanode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeNodeBase](/vext/ref/fb/treenodebase) | The instance to cast to [SubtitleDataNode](/vext/ref/fb/subtitledatanode). |

### SubtitleDataNode {#constructor-3}

> **SubtitleDataNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SubtitleDataNode](/vext/ref/fb/subtitledatanode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SubtitleDataNode](/vext/ref/fb/subtitledatanode). |

## Properties

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "displayTime" %}}

> **float**

### {{% prop-heading "siD1" %}}

> **string**

### {{% prop-heading "siD2" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubtitleDataNode](/vext/ref/fb/subtitledatanode) type.

