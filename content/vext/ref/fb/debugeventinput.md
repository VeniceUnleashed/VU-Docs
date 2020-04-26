---
title: DebugEventInput
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[DebugEventInput](#constructor-0)**() |
| **[DebugEventInput](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DebugEventInput](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[DebugEventInput](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "e" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "name" >}} | string |
| {{< prop "requireTriggeredAndSet" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebugEventInput" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebugEventInput {#constructor-0}

> **DebugEventInput**()

Creates a new [DebugEventInput](/vext/ref/fb/debugeventinput) frostbite instance.

### DebugEventInput {#constructor-1}

> **DebugEventInput**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebugEventInput](/vext/ref/fb/debugeventinput) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DebugEventInput {#constructor-2}

> **DebugEventInput**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [DebugEventInput](/vext/ref/fb/debugeventinput). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [DebugEventInput](/vext/ref/fb/debugeventinput). |

### DebugEventInput {#constructor-3}

> **DebugEventInput**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DebugEventInput](/vext/ref/fb/debugeventinput). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DebugEventInput](/vext/ref/fb/debugeventinput). |

## Properties

### {{% prop-heading "e" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "requireTriggeredAndSet" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebugEventInput](/vext/ref/fb/debugeventinput) type.

