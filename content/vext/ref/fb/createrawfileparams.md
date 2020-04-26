---
title: CreateRawFileParams
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CreateRawFileParams](#constructor-0)**() |
| **[CreateRawFileParams](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CreateRawFileParams](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "assetName" >}} | string |
| {{< prop "sourceFile" >}} | string |
| {{< prop "createResource" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CreateRawFileParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CreateRawFileParams {#constructor-0}
> **CreateRawFileParams**()

Creates a new [CreateRawFileParams](/vext/ref/fb/createrawfileparams) frostbite instance.

### CreateRawFileParams {#constructor-1}
> **CreateRawFileParams**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CreateRawFileParams](/vext/ref/fb/createrawfileparams) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CreateRawFileParams {#constructor-2}
> **CreateRawFileParams**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CreateRawFileParams](/vext/ref/fb/createrawfileparams). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CreateRawFileParams](/vext/ref/fb/createrawfileparams). |

## Properties
### {{% prop-heading "assetName" %}}
> **string**

### {{% prop-heading "sourceFile" %}}
> **string**

### {{% prop-heading "createResource" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CreateRawFileParams](/vext/ref/fb/createrawfileparams) type.

