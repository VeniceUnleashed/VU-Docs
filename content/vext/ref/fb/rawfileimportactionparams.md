---
title: RawFileImportActionParams
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RawFileImportActionParams](#constructor-0)**() |
| **[RawFileImportActionParams](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RawFileImportActionParams](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sourceFile" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RawFileImportActionParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RawFileImportActionParams {#constructor-0}
> **RawFileImportActionParams**()

Creates a new [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams) frostbite instance.

### RawFileImportActionParams {#constructor-1}
> **RawFileImportActionParams**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RawFileImportActionParams {#constructor-2}
> **RawFileImportActionParams**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams). |

## Properties
### {{% prop-heading "sourceFile" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RawFileImportActionParams](/vext/ref/fb/rawfileimportactionparams) type.

