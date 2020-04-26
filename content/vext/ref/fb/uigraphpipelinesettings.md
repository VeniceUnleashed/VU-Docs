---
title: UIGraphPipelineSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UIGraphPipelineSettings](#constructor-0)**() |
| **[UIGraphPipelineSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIGraphPipelineSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "oneBundlePerGraph" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGraphPipelineSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGraphPipelineSettings {#constructor-0}
> **UIGraphPipelineSettings**()

Creates a new [UIGraphPipelineSettings](/vext/ref/fb/uigraphpipelinesettings) frostbite instance.

### UIGraphPipelineSettings {#constructor-1}
> **UIGraphPipelineSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIGraphPipelineSettings](/vext/ref/fb/uigraphpipelinesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIGraphPipelineSettings {#constructor-2}
> **UIGraphPipelineSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphPipelineSettings](/vext/ref/fb/uigraphpipelinesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIGraphPipelineSettings](/vext/ref/fb/uigraphpipelinesettings). |

## Properties
### {{% prop-heading "oneBundlePerGraph" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGraphPipelineSettings](/vext/ref/fb/uigraphpipelinesettings) type.

