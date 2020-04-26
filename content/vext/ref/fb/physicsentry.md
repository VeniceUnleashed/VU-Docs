---
title: PhysicsEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[PhysicsEntry](#constructor-0)**() |
| **[PhysicsEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PhysicsEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[PhysicsEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "distance" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "azimuth" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "elevationAngle" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "output" >}} | [OutputNodeData](/vext/ref/fb/outputnodedata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsEntry {#constructor-0}

> **PhysicsEntry**()

Creates a new [PhysicsEntry](/vext/ref/fb/physicsentry) frostbite instance.

### PhysicsEntry {#constructor-1}

> **PhysicsEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhysicsEntry](/vext/ref/fb/physicsentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PhysicsEntry {#constructor-2}

> **PhysicsEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [PhysicsEntry](/vext/ref/fb/physicsentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [PhysicsEntry](/vext/ref/fb/physicsentry). |

### PhysicsEntry {#constructor-3}

> **PhysicsEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PhysicsEntry](/vext/ref/fb/physicsentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PhysicsEntry](/vext/ref/fb/physicsentry). |

## Properties

### {{% prop-heading "distance" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "azimuth" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "elevationAngle" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "output" %}}

> **[OutputNodeData](/vext/ref/fb/outputnodedata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhysicsEntry](/vext/ref/fb/physicsentry) type.

