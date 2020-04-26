---
title: StateNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[StateNode](#constructor-0)**() |
| **[StateNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StateNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[StateNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "screen" >}} | [UIScreenAsset](/vext/ref/fb/uiscreenasset) \| nil |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "show" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "hide" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "inputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "renderToTexture" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StateNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StateNode {#constructor-0}

> **StateNode**()

Creates a new [StateNode](/vext/ref/fb/statenode) frostbite instance.

### StateNode {#constructor-1}

> **StateNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StateNode](/vext/ref/fb/statenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StateNode {#constructor-2}

> **StateNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [StateNode](/vext/ref/fb/statenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [StateNode](/vext/ref/fb/statenode). |

### StateNode {#constructor-3}

> **StateNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StateNode](/vext/ref/fb/statenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StateNode](/vext/ref/fb/statenode). |

## Properties

### {{% prop-heading "screen" %}}

> **[UIScreenAsset](/vext/ref/fb/uiscreenasset)** \| **nil**

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "show" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "hide" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "inputs" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "outputs" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "renderToTexture" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StateNode](/vext/ref/fb/statenode) type.

