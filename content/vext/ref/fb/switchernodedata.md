---
title: SwitcherNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[SwitcherNodeData](#constructor-0)**() |
| **[SwitcherNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SwitcherNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SwitcherNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "outputs" >}} | [SwitcherEntry](/vext/ref/fb/switcherentry)[] |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "defaultCaseValue" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SwitcherNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SwitcherNodeData {#constructor-0}

> **SwitcherNodeData**()

Creates a new [SwitcherNodeData](/vext/ref/fb/switchernodedata) frostbite instance.

### SwitcherNodeData {#constructor-1}

> **SwitcherNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SwitcherNodeData](/vext/ref/fb/switchernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SwitcherNodeData {#constructor-2}

> **SwitcherNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SwitcherNodeData](/vext/ref/fb/switchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SwitcherNodeData](/vext/ref/fb/switchernodedata). |

### SwitcherNodeData {#constructor-3}

> **SwitcherNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SwitcherNodeData](/vext/ref/fb/switchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SwitcherNodeData](/vext/ref/fb/switchernodedata). |

## Properties

### {{% prop-heading "outputs" %}}

> **[SwitcherEntry](/vext/ref/fb/switcherentry)**[]

### {{% prop-heading "trigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "defaultCaseValue" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SwitcherNodeData](/vext/ref/fb/switchernodedata) type.

