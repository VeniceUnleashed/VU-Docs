---
title: SwitcherEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[SwitcherEntry](#constructor-0)**() |
| **[SwitcherEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SwitcherEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[SwitcherEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "caseTrigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "caseValue" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SwitcherEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SwitcherEntry {#constructor-0}

> **SwitcherEntry**()

Creates a new [SwitcherEntry](/vext/ref/fb/switcherentry) frostbite instance.

### SwitcherEntry {#constructor-1}

> **SwitcherEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SwitcherEntry](/vext/ref/fb/switcherentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SwitcherEntry {#constructor-2}

> **SwitcherEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [SwitcherEntry](/vext/ref/fb/switcherentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [SwitcherEntry](/vext/ref/fb/switcherentry). |

### SwitcherEntry {#constructor-3}

> **SwitcherEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SwitcherEntry](/vext/ref/fb/switcherentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SwitcherEntry](/vext/ref/fb/switcherentry). |

## Properties

### {{% prop-heading "caseTrigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "caseValue" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SwitcherEntry](/vext/ref/fb/switcherentry) type.

