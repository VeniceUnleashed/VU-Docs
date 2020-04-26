---
title: StateRenderSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[StateRenderSettings](#constructor-0)**() |
| **[StateRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StateRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "ps3PixelShaderConstantsEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StateRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StateRenderSettings {#constructor-0}

> **StateRenderSettings**()

Creates a new [StateRenderSettings](/vext/ref/fb/staterendersettings) frostbite instance.

### StateRenderSettings {#constructor-1}

> **StateRenderSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StateRenderSettings](/vext/ref/fb/staterendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StateRenderSettings {#constructor-2}

> **StateRenderSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StateRenderSettings](/vext/ref/fb/staterendersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StateRenderSettings](/vext/ref/fb/staterendersettings). |

## Properties

### {{% prop-heading "ps3PixelShaderConstantsEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StateRenderSettings](/vext/ref/fb/staterendersettings) type.

