---
title: JoypadNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[JoypadNodeData](#constructor-0)**() |
| **[JoypadNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[JoypadNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[JoypadNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "leftAnalogX" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "leftAnalogY" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "rightAnalogX" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "rightAnalogY" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "aButton" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "bButton" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "JoypadNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### JoypadNodeData {#constructor-0}

> **JoypadNodeData**()

Creates a new [JoypadNodeData](/vext/ref/fb/joypadnodedata) frostbite instance.

### JoypadNodeData {#constructor-1}

> **JoypadNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [JoypadNodeData](/vext/ref/fb/joypadnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### JoypadNodeData {#constructor-2}

> **JoypadNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [JoypadNodeData](/vext/ref/fb/joypadnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [JoypadNodeData](/vext/ref/fb/joypadnodedata). |

### JoypadNodeData {#constructor-3}

> **JoypadNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [JoypadNodeData](/vext/ref/fb/joypadnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [JoypadNodeData](/vext/ref/fb/joypadnodedata). |

## Properties

### {{% prop-heading "leftAnalogX" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "leftAnalogY" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "rightAnalogX" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "rightAnalogY" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "aButton" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "bButton" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [JoypadNodeData](/vext/ref/fb/joypadnodedata) type.

