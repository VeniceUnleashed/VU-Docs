---
title: StateRenderSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[StateRenderSettings](#constructor-0)**() |
| **[StateRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StateRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ps3PixelShaderConstantsEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StateRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StateRenderSettings {#constructor-0}
> **StateRenderSettings**()

Creates a new [StateRenderSettings](/vext/ref/fb/staterendersettings) frostbite instance.

### StateRenderSettings {#constructor-1}
> **StateRenderSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StateRenderSettings](/vext/ref/fb/staterendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StateRenderSettings {#constructor-2}
> **StateRenderSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateRenderSettings](/vext/ref/fb/staterendersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StateRenderSettings](/vext/ref/fb/staterendersettings). |

## Properties
### {{% prop-heading "ps3PixelShaderConstantsEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StateRenderSettings](/vext/ref/fb/staterendersettings) type.

