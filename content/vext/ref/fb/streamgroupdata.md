---
title: StreamGroupData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[StreamGroupData](#constructor-0)**() |
| **[StreamGroupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StreamGroupData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "assets" >}} | [Asset](/vext/ref/fb/asset)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StreamGroupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StreamGroupData {#constructor-0}
> **StreamGroupData**()

Creates a new [StreamGroupData](/vext/ref/fb/streamgroupdata) frostbite instance.

### StreamGroupData {#constructor-1}
> **StreamGroupData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StreamGroupData](/vext/ref/fb/streamgroupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StreamGroupData {#constructor-2}
> **StreamGroupData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamGroupData](/vext/ref/fb/streamgroupdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StreamGroupData](/vext/ref/fb/streamgroupdata). |

## Properties
### {{% prop-heading "assets" %}}
> **[Asset](/vext/ref/fb/asset)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StreamGroupData](/vext/ref/fb/streamgroupdata) type.

