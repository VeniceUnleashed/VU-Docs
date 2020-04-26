---
title: MixGroup
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MixGroup](#constructor-0)**() |
| **[MixGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "groupIndex" >}} | int |
| {{< prop "parentGroupIndex" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixGroup {#constructor-0}
> **MixGroup**()

Creates a new [MixGroup](/vext/ref/fb/mixgroup) frostbite instance.

### MixGroup {#constructor-1}
> **MixGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixGroup](/vext/ref/fb/mixgroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixGroup {#constructor-2}
> **MixGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixGroup](/vext/ref/fb/mixgroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixGroup](/vext/ref/fb/mixgroup). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "groupIndex" %}}
> **int**

### {{% prop-heading "parentGroupIndex" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixGroup](/vext/ref/fb/mixgroup) type.

