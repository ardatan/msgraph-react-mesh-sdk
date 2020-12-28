import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /**
   * 
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   * 
   *     Note the time designator, T, that precedes the time value.
   * 
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *   
   */
  ISO8601Duration: string;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: Buffer;
};




export type QueryOptions = {
  /** A data service URI with a $orderby System Query Option specifies an expression for determining what values are used to order the collection of Entries identified by the Resource Path section of the URI. This query option is only supported when the resource path identifies a Collection of Entries. */
  orderby?: Maybe<Scalars['String']>;
  /** A data service URI with a $top System Query Option identifies a subset of the Entries in the Collection of Entries identified by the Resource Path section of the URI. This subset is formed by selecting only the first N items of the set, where N is an integer greater than or equal to zero specified by this query option. If a value less than zero is specified, the URI should be considered malformed. */
  top?: Maybe<Scalars['Int']>;
  /** A data service URI with a $skip System Query Option identifies a subset of the Entries in the Collection of Entries identified by the Resource Path section of the URI. That subset is defined by seeking N Entries into the Collection and selecting only the remaining Entries (starting with Entry N+1). N is an integer greater than or equal to zero specified by this query option. If a value less than zero is specified, the URI should be considered malformed. */
  skip?: Maybe<Scalars['Int']>;
  /** A URI with a $filter System Query Option identifies a subset of the Entries from the Collection of Entries identified by the Resource Path section of the URI. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the query option. */
  filter?: Maybe<Scalars['String']>;
  /** A URI with a $inlinecount System Query Option specifies that the response to the request includes a count of the number of Entries in the Collection of Entries identified by the Resource Path section of the URI. The count must be calculated after applying any $filter System Query Options present in the URI. The set of valid values for the $inlinecount query option are shown in the table below. If a value other than one shown in Table 4 is specified the URI is considered malformed. */
  inlinecount?: Maybe<InlineCount>;
  count?: Maybe<Scalars['Boolean']>;
};

export enum InlineCount {
  /** The OData MUST include a count of the number of entities in the collection identified by the URI (after applying any $filter System Query Options present on the URI) */
  allpages = 'allpages',
  /** The OData service MUST NOT include a count in the response. This is equivalence to a URI that does not include a $inlinecount query string parameter. */
  none = 'none'
}



export enum GraphOperationResult {
  success = 'success',
  failure = 'failure',
  timeout = 'timeout',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphConditionalAccessStatus {
  success = 'success',
  failure = 'failure',
  notApplied = 'notApplied',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRiskDetail {
  none = 'none',
  adminGeneratedTemporaryPassword = 'adminGeneratedTemporaryPassword',
  userPerformedSecuredPasswordChange = 'userPerformedSecuredPasswordChange',
  userPerformedSecuredPasswordReset = 'userPerformedSecuredPasswordReset',
  adminConfirmedSigninSafe = 'adminConfirmedSigninSafe',
  aiConfirmedSigninSafe = 'aiConfirmedSigninSafe',
  userPassedMFADrivenByRiskBasedPolicy = 'userPassedMFADrivenByRiskBasedPolicy',
  adminDismissedAllRiskForUser = 'adminDismissedAllRiskForUser',
  adminConfirmedSigninCompromised = 'adminConfirmedSigninCompromised',
  hidden = 'hidden',
  adminConfirmedUserCompromised = 'adminConfirmedUserCompromised',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRiskEventType {
  unlikelyTravel = 'unlikelyTravel',
  anonymizedIPAddress = 'anonymizedIPAddress',
  maliciousIPAddress = 'maliciousIPAddress',
  unfamiliarFeatures = 'unfamiliarFeatures',
  malwareInfectedIPAddress = 'malwareInfectedIPAddress',
  suspiciousIPAddress = 'suspiciousIPAddress',
  leakedCredentials = 'leakedCredentials',
  investigationsThreatIntelligence = 'investigationsThreatIntelligence',
  generic = 'generic',
  adminConfirmedUserCompromised = 'adminConfirmedUserCompromised',
  mcasImpossibleTravel = 'mcasImpossibleTravel',
  mcasSuspiciousInboxManipulationRules = 'mcasSuspiciousInboxManipulationRules',
  investigationsThreatIntelligenceSigninLinked = 'investigationsThreatIntelligenceSigninLinked',
  maliciousIPAddressValidCredentialsBlockedIP = 'maliciousIPAddressValidCredentialsBlockedIP',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRiskLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
  hidden = 'hidden',
  none = 'none',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRiskState {
  none = 'none',
  confirmedSafe = 'confirmedSafe',
  remediated = 'remediated',
  dismissed = 'dismissed',
  atRisk = 'atRisk',
  confirmedCompromised = 'confirmedCompromised',
  unknownFutureValue = 'unknownFutureValue'
}






export type GraphDirectoryObjectInput = {
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};





export enum GraphManagedAppFlaggedReason {
  none = 'none',
  rootedDevice = 'rootedDevice'
}


export type GraphManagedAppPolicyInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphManagedMobileAppInput = {
  mobileAppIdentifier?: Maybe<GraphMobileAppIdentifierInput>;
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphMobileAppIdentifierInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphUserInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  ageGroup?: Maybe<Scalars['String']>;
  assignedLicenses: Array<Maybe<GraphAssignedLicenseInput>>;
  assignedPlans: Array<Maybe<GraphAssignedPlanInput>>;
  businessPhones: Array<Maybe<Scalars['String']>>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  consentProvidedForMinor?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  creationType?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  employeeHireDate?: Maybe<Scalars['DateTime']>;
  employeeId?: Maybe<Scalars['String']>;
  employeeOrgData?: Maybe<GraphEmployeeOrgDataInput>;
  employeeType?: Maybe<Scalars['String']>;
  externalUserState?: Maybe<Scalars['String']>;
  externalUserStateChangeDateTime?: Maybe<Scalars['DateTime']>;
  faxNumber?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  identities?: Maybe<Array<Maybe<GraphObjectIdentityInput>>>;
  imAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  isResourceAccount?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastPasswordChangeDateTime?: Maybe<Scalars['DateTime']>;
  legalAgeGroupClassification?: Maybe<Scalars['String']>;
  licenseAssignmentStates?: Maybe<Array<Maybe<GraphLicenseAssignmentStateInput>>>;
  mail?: Maybe<Scalars['String']>;
  mailNickname?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  officeLocation?: Maybe<Scalars['String']>;
  onPremisesDistinguishedName?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesExtensionAttributes?: Maybe<GraphOnPremisesExtensionAttributesInput>;
  onPremisesImmutableId?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSamAccountName?: Maybe<Scalars['String']>;
  onPremisesSecurityIdentifier?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  onPremisesUserPrincipalName?: Maybe<Scalars['String']>;
  otherMails: Array<Maybe<Scalars['String']>>;
  passwordPolicies?: Maybe<Scalars['String']>;
  passwordProfile?: Maybe<GraphPasswordProfileInput>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  provisionedPlans: Array<Maybe<GraphProvisionedPlanInput>>;
  proxyAddresses: Array<Maybe<Scalars['String']>>;
  showInAddressList?: Maybe<Scalars['Boolean']>;
  signInSessionsValidFromDateTime?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  usageLocation?: Maybe<Scalars['String']>;
  userPrincipalName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  mailboxSettings?: Maybe<GraphMailboxSettingsInput>;
  deviceEnrollmentLimit: Scalars['Int'];
  aboutMe?: Maybe<Scalars['String']>;
  birthday: Scalars['DateTime'];
  hireDate: Scalars['DateTime'];
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  mySite?: Maybe<Scalars['String']>;
  pastProjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  preferredName?: Maybe<Scalars['String']>;
  responsibilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  schools?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphAssignedLicenseInput = {
  disabledPlans: Array<Maybe<Scalars['GUID']>>;
  skuId?: Maybe<Scalars['GUID']>;
};

export type GraphAssignedPlanInput = {
  assignedDateTime?: Maybe<Scalars['DateTime']>;
  capabilityStatus?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  servicePlanId?: Maybe<Scalars['GUID']>;
};

export type GraphEmployeeOrgDataInput = {
  costCenter?: Maybe<Scalars['String']>;
  division?: Maybe<Scalars['String']>;
};

export type GraphObjectIdentityInput = {
  issuer?: Maybe<Scalars['String']>;
  issuerAssignedId?: Maybe<Scalars['String']>;
  signInType?: Maybe<Scalars['String']>;
};

export type GraphLicenseAssignmentStateInput = {
  assignedByGroup?: Maybe<Scalars['String']>;
  disabledPlans?: Maybe<Array<Maybe<Scalars['GUID']>>>;
  error?: Maybe<Scalars['String']>;
  skuId?: Maybe<Scalars['GUID']>;
  state?: Maybe<Scalars['String']>;
};

export type GraphOnPremisesExtensionAttributesInput = {
  extensionAttribute1?: Maybe<Scalars['String']>;
  extensionAttribute10?: Maybe<Scalars['String']>;
  extensionAttribute11?: Maybe<Scalars['String']>;
  extensionAttribute12?: Maybe<Scalars['String']>;
  extensionAttribute13?: Maybe<Scalars['String']>;
  extensionAttribute14?: Maybe<Scalars['String']>;
  extensionAttribute15?: Maybe<Scalars['String']>;
  extensionAttribute2?: Maybe<Scalars['String']>;
  extensionAttribute3?: Maybe<Scalars['String']>;
  extensionAttribute4?: Maybe<Scalars['String']>;
  extensionAttribute5?: Maybe<Scalars['String']>;
  extensionAttribute6?: Maybe<Scalars['String']>;
  extensionAttribute7?: Maybe<Scalars['String']>;
  extensionAttribute8?: Maybe<Scalars['String']>;
  extensionAttribute9?: Maybe<Scalars['String']>;
};

export type GraphOnPremisesProvisioningErrorInput = {
  category?: Maybe<Scalars['String']>;
  occurredDateTime?: Maybe<Scalars['DateTime']>;
  propertyCausingError?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphPasswordProfileInput = {
  forceChangePasswordNextSignIn?: Maybe<Scalars['Boolean']>;
  forceChangePasswordNextSignInWithMfa?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
};

export type GraphProvisionedPlanInput = {
  capabilityStatus?: Maybe<Scalars['String']>;
  provisioningStatus?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};

export type GraphMailboxSettingsInput = {
  archiveFolder?: Maybe<Scalars['String']>;
  automaticRepliesSetting?: Maybe<GraphAutomaticRepliesSettingInput>;
  dateFormat?: Maybe<Scalars['String']>;
  delegateMeetingMessageDeliveryOptions?: Maybe<GraphDelegateMeetingMessageDeliveryOptions>;
  language?: Maybe<GraphLocaleInfoInput>;
  timeFormat?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  workingHours?: Maybe<GraphWorkingHoursInput>;
};

export type GraphAutomaticRepliesSettingInput = {
  externalAudience?: Maybe<GraphExternalAudienceScope>;
  externalReplyMessage?: Maybe<Scalars['String']>;
  internalReplyMessage?: Maybe<Scalars['String']>;
  scheduledEndDateTime?: Maybe<GraphDateTimeTimeZoneInput>;
  scheduledStartDateTime?: Maybe<GraphDateTimeTimeZoneInput>;
  status?: Maybe<GraphAutomaticRepliesStatus>;
};

export enum GraphExternalAudienceScope {
  none = 'none',
  contactsOnly = 'contactsOnly',
  all = 'all'
}

export type GraphDateTimeTimeZoneInput = {
  dateTime: Scalars['String'];
  timeZone?: Maybe<Scalars['String']>;
};

export enum GraphAutomaticRepliesStatus {
  disabled = 'disabled',
  alwaysEnabled = 'alwaysEnabled',
  scheduled = 'scheduled'
}

export enum GraphDelegateMeetingMessageDeliveryOptions {
  sendToDelegateAndInformationToPrincipal = 'sendToDelegateAndInformationToPrincipal',
  sendToDelegateAndPrincipal = 'sendToDelegateAndPrincipal',
  sendToDelegateOnly = 'sendToDelegateOnly'
}

export type GraphLocaleInfoInput = {
  displayName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GraphWorkingHoursInput = {
  daysOfWeek?: Maybe<Array<Maybe<GraphDayOfWeek>>>;
  endTime?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  timeZone?: Maybe<GraphTimeZoneBaseInput>;
};

export enum GraphDayOfWeek {
  sunday = 'sunday',
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday'
}

export type GraphTimeZoneBaseInput = {
  name?: Maybe<Scalars['String']>;
};

export type GraphAttendeeBaseInput = {
  type?: Maybe<GraphAttendeeType>;
  emailAddress?: Maybe<GraphEmailAddressInput>;
};

export enum GraphAttendeeType {
  required = 'required',
  optional = 'optional',
  resource = 'resource'
}

export type GraphEmailAddressInput = {
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GraphLocationConstraintInput = {
  isRequired?: Maybe<Scalars['Boolean']>;
  locations?: Maybe<Array<Maybe<GraphLocationConstraintItemInput>>>;
  suggestLocation?: Maybe<Scalars['Boolean']>;
};

export type GraphLocationConstraintItemInput = {
  resolveAvailability?: Maybe<Scalars['Boolean']>;
  address?: Maybe<GraphPhysicalAddressInput>;
  coordinates?: Maybe<GraphOutlookGeoCoordinatesInput>;
  displayName?: Maybe<Scalars['String']>;
  locationEmailAddress?: Maybe<Scalars['String']>;
  locationType?: Maybe<GraphLocationType>;
  locationUri?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  uniqueIdType?: Maybe<GraphLocationUniqueIdType>;
};

export type GraphPhysicalAddressInput = {
  city?: Maybe<Scalars['String']>;
  countryOrRegion?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type GraphOutlookGeoCoordinatesInput = {
  accuracy?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
  altitudeAccuracy?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export enum GraphLocationType {
  default = 'default',
  conferenceRoom = 'conferenceRoom',
  homeAddress = 'homeAddress',
  businessAddress = 'businessAddress',
  geoCoordinates = 'geoCoordinates',
  streetAddress = 'streetAddress',
  hotel = 'hotel',
  restaurant = 'restaurant',
  localBusiness = 'localBusiness',
  postalAddress = 'postalAddress'
}

export enum GraphLocationUniqueIdType {
  unknown = 'unknown',
  locationStore = 'locationStore',
  directory = 'directory',
  private = 'private',
  bing = 'bing'
}

export type GraphTimeConstraintInput = {
  activityDomain?: Maybe<GraphActivityDomain>;
  timeSlots?: Maybe<Array<Maybe<GraphTimeSlotInput>>>;
};

export enum GraphActivityDomain {
  unknown = 'unknown',
  work = 'work',
  personal = 'personal',
  unrestricted = 'unrestricted'
}

export type GraphTimeSlotInput = {
  end: GraphDateTimeTimeZoneInput;
  start: GraphDateTimeTimeZoneInput;
};


export enum GraphMailTipsType {
  automaticReplies = 'automaticReplies',
  mailboxFullStatus = 'mailboxFullStatus',
  customMailTip = 'customMailTip',
  externalMemberCount = 'externalMemberCount',
  totalMemberCount = 'totalMemberCount',
  maxMessageSize = 'maxMessageSize',
  deliveryRestriction = 'deliveryRestriction',
  moderationStatus = 'moderationStatus',
  recipientScope = 'recipientScope',
  recipientSuggestions = 'recipientSuggestions'
}

export type GraphMessageInput = {
  bccRecipients?: Maybe<Array<Maybe<GraphRecipientInput>>>;
  body?: Maybe<GraphItemBodyInput>;
  bodyPreview?: Maybe<Scalars['String']>;
  ccRecipients?: Maybe<Array<Maybe<GraphRecipientInput>>>;
  conversationId?: Maybe<Scalars['String']>;
  conversationIndex?: Maybe<Scalars['String']>;
  flag?: Maybe<GraphFollowupFlagInput>;
  from?: Maybe<GraphRecipientInput>;
  hasAttachments?: Maybe<Scalars['Boolean']>;
  importance?: Maybe<GraphImportance>;
  inferenceClassification?: Maybe<GraphInferenceClassificationType>;
  internetMessageHeaders?: Maybe<Array<Maybe<GraphInternetMessageHeaderInput>>>;
  internetMessageId?: Maybe<Scalars['String']>;
  isDeliveryReceiptRequested?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  isReadReceiptRequested?: Maybe<Scalars['Boolean']>;
  parentFolderId?: Maybe<Scalars['String']>;
  receivedDateTime?: Maybe<Scalars['DateTime']>;
  replyTo?: Maybe<Array<Maybe<GraphRecipientInput>>>;
  sender?: Maybe<GraphRecipientInput>;
  sentDateTime?: Maybe<Scalars['DateTime']>;
  subject?: Maybe<Scalars['String']>;
  toRecipients?: Maybe<Array<Maybe<GraphRecipientInput>>>;
  uniqueBody?: Maybe<GraphItemBodyInput>;
  webLink?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  changeKey?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphRecipientInput = {
  emailAddress?: Maybe<GraphEmailAddressInput>;
};

export type GraphItemBodyInput = {
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<GraphBodyType>;
};

export enum GraphBodyType {
  text = 'text',
  html = 'html'
}

export type GraphFollowupFlagInput = {
  completedDateTime?: Maybe<GraphDateTimeTimeZoneInput>;
  dueDateTime?: Maybe<GraphDateTimeTimeZoneInput>;
  flagStatus?: Maybe<GraphFollowupFlagStatus>;
  startDateTime?: Maybe<GraphDateTimeTimeZoneInput>;
};

export enum GraphFollowupFlagStatus {
  notFlagged = 'notFlagged',
  complete = 'complete',
  flagged = 'flagged'
}

export enum GraphImportance {
  low = 'low',
  normal = 'normal',
  high = 'high'
}

export enum GraphInferenceClassificationType {
  focused = 'focused',
  other = 'other'
}

export type GraphInternetMessageHeaderInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum GraphExchangeIdFormat {
  entryId = 'entryId',
  ewsId = 'ewsId',
  immutableEntryId = 'immutableEntryId',
  restId = 'restId',
  restImmutableEntryId = 'restImmutableEntryId'
}






export enum GraphOnlineMeetingProviderType {
  unknown = 'unknown',
  skypeForBusiness = 'skypeForBusiness',
  skypeForConsumer = 'skypeForConsumer',
  teamsForBusiness = 'teamsForBusiness'
}

export enum GraphCalendarColor {
  auto = 'auto',
  lightBlue = 'lightBlue',
  lightGreen = 'lightGreen',
  lightOrange = 'lightOrange',
  lightGray = 'lightGray',
  lightYellow = 'lightYellow',
  lightTeal = 'lightTeal',
  lightPink = 'lightPink',
  lightBrown = 'lightBrown',
  lightRed = 'lightRed',
  maxColor = 'maxColor'
}

export enum GraphCalendarRoleType {
  none = 'none',
  freeBusyRead = 'freeBusyRead',
  limitedRead = 'limitedRead',
  read = 'read',
  write = 'write',
  delegateWithoutPrivateEventAccess = 'delegateWithoutPrivateEventAccess',
  delegateWithPrivateEventAccess = 'delegateWithPrivateEventAccess',
  custom = 'custom'
}

export type GraphCalendarInput = {
  allowedOnlineMeetingProviders?: Maybe<Array<Maybe<GraphOnlineMeetingProviderType>>>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canShare?: Maybe<Scalars['Boolean']>;
  canViewPrivateItems?: Maybe<Scalars['Boolean']>;
  changeKey?: Maybe<Scalars['String']>;
  color?: Maybe<GraphCalendarColor>;
  defaultOnlineMeetingProvider?: Maybe<GraphOnlineMeetingProviderType>;
  hexColor?: Maybe<Scalars['String']>;
  isDefaultCalendar?: Maybe<Scalars['Boolean']>;
  isRemovable?: Maybe<Scalars['Boolean']>;
  isTallyingResponses?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<GraphEmailAddressInput>;
  id: Scalars['String'];
};





export enum GraphSensitivity {
  normal = 'normal',
  personal = 'personal',
  private = 'private',
  confidential = 'confidential'
}

export enum GraphFreeBusyStatus {
  unknown = 'unknown',
  free = 'free',
  tentative = 'tentative',
  busy = 'busy',
  oof = 'oof',
  workingElsewhere = 'workingElsewhere'
}

export enum GraphEventType {
  singleInstance = 'singleInstance',
  occurrence = 'occurrence',
  exception = 'exception',
  seriesMaster = 'seriesMaster'
}


export type GraphAttachmentInput = {
  contentType?: Maybe<Scalars['String']>;
  isInline: Scalars['Boolean'];
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphAttachmentItemInput = {
  attachmentType?: Maybe<GraphAttachmentType>;
  contentType?: Maybe<Scalars['String']>;
  isInline?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['BigInt']>;
};

export enum GraphAttachmentType {
  file = 'file',
  item = 'item',
  reference = 'reference'
}


export type GraphEventInput = {
  allowNewTimeProposals?: Maybe<Scalars['Boolean']>;
  attendees?: Maybe<Array<Maybe<GraphAttendeeInput>>>;
  body?: Maybe<GraphItemBodyInput>;
  bodyPreview?: Maybe<Scalars['String']>;
  end?: Maybe<GraphDateTimeTimeZoneInput>;
  hasAttachments?: Maybe<Scalars['Boolean']>;
  hideAttendees?: Maybe<Scalars['Boolean']>;
  iCalUId?: Maybe<Scalars['String']>;
  importance?: Maybe<GraphImportance>;
  isAllDay?: Maybe<Scalars['Boolean']>;
  isCancelled?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isOnlineMeeting?: Maybe<Scalars['Boolean']>;
  isOrganizer?: Maybe<Scalars['Boolean']>;
  isReminderOn?: Maybe<Scalars['Boolean']>;
  location?: Maybe<GraphLocationInput>;
  locations?: Maybe<Array<Maybe<GraphLocationInput>>>;
  onlineMeeting?: Maybe<GraphOnlineMeetingInfoInput>;
  onlineMeetingProvider?: Maybe<GraphOnlineMeetingProviderType>;
  onlineMeetingUrl?: Maybe<Scalars['String']>;
  organizer?: Maybe<GraphRecipientInput>;
  originalEndTimeZone?: Maybe<Scalars['String']>;
  originalStart?: Maybe<Scalars['DateTime']>;
  originalStartTimeZone?: Maybe<Scalars['String']>;
  recurrence?: Maybe<GraphPatternedRecurrenceInput>;
  reminderMinutesBeforeStart?: Maybe<Scalars['Int']>;
  responseRequested?: Maybe<Scalars['Boolean']>;
  responseStatus?: Maybe<GraphResponseStatusInput>;
  sensitivity?: Maybe<GraphSensitivity>;
  seriesMasterId?: Maybe<Scalars['String']>;
  showAs?: Maybe<GraphFreeBusyStatus>;
  start?: Maybe<GraphDateTimeTimeZoneInput>;
  subject?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  type?: Maybe<GraphEventType>;
  webLink?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  changeKey?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphAttendeeInput = {
  proposedNewTime?: Maybe<GraphTimeSlotInput>;
  status?: Maybe<GraphResponseStatusInput>;
  type?: Maybe<GraphAttendeeType>;
  emailAddress?: Maybe<GraphEmailAddressInput>;
};

export type GraphResponseStatusInput = {
  response?: Maybe<GraphResponseType>;
  time?: Maybe<Scalars['DateTime']>;
};

export enum GraphResponseType {
  none = 'none',
  organizer = 'organizer',
  tentativelyAccepted = 'tentativelyAccepted',
  accepted = 'accepted',
  declined = 'declined',
  notResponded = 'notResponded'
}

export type GraphLocationInput = {
  address?: Maybe<GraphPhysicalAddressInput>;
  coordinates?: Maybe<GraphOutlookGeoCoordinatesInput>;
  displayName?: Maybe<Scalars['String']>;
  locationEmailAddress?: Maybe<Scalars['String']>;
  locationType?: Maybe<GraphLocationType>;
  locationUri?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  uniqueIdType?: Maybe<GraphLocationUniqueIdType>;
};

export type GraphOnlineMeetingInfoInput = {
  conferenceId?: Maybe<Scalars['String']>;
  joinUrl?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<GraphPhoneInput>>>;
  quickDial?: Maybe<Scalars['String']>;
  tollFreeNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  tollNumber?: Maybe<Scalars['String']>;
};

export type GraphPhoneInput = {
  language?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  type?: Maybe<GraphPhoneType>;
};

export enum GraphPhoneType {
  home = 'home',
  business = 'business',
  mobile = 'mobile',
  other = 'other',
  assistant = 'assistant',
  homeFax = 'homeFax',
  businessFax = 'businessFax',
  otherFax = 'otherFax',
  pager = 'pager',
  radio = 'radio'
}

export type GraphPatternedRecurrenceInput = {
  pattern?: Maybe<GraphRecurrencePatternInput>;
  range?: Maybe<GraphRecurrenceRangeInput>;
};

export type GraphRecurrencePatternInput = {
  dayOfMonth: Scalars['Int'];
  daysOfWeek?: Maybe<Array<Maybe<GraphDayOfWeek>>>;
  firstDayOfWeek?: Maybe<GraphDayOfWeek>;
  index?: Maybe<GraphWeekIndex>;
  interval: Scalars['Int'];
  month: Scalars['Int'];
  type?: Maybe<GraphRecurrencePatternType>;
};

export enum GraphWeekIndex {
  first = 'first',
  second = 'second',
  third = 'third',
  fourth = 'fourth',
  last = 'last'
}

export enum GraphRecurrencePatternType {
  daily = 'daily',
  weekly = 'weekly',
  absoluteMonthly = 'absoluteMonthly',
  relativeMonthly = 'relativeMonthly',
  absoluteYearly = 'absoluteYearly',
  relativeYearly = 'relativeYearly'
}

export type GraphRecurrenceRangeInput = {
  endDate?: Maybe<Scalars['Date']>;
  numberOfOccurrences: Scalars['Int'];
  recurrenceTimeZone?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  type?: Maybe<GraphRecurrenceRangeType>;
};


export enum GraphRecurrenceRangeType {
  endDate = 'endDate',
  noEnd = 'noEnd',
  numbered = 'numbered'
}





export type GraphMailFolderInput = {
  childFolderCount?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  parentFolderId?: Maybe<Scalars['String']>;
  totalItemCount?: Maybe<Scalars['Int']>;
  unreadItemCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
};









export type GraphSiteInput = {
  displayName?: Maybe<Scalars['String']>;
  error?: Maybe<GraphPublicErrorInput>;
  root?: Maybe<GraphRootInput>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  siteCollection?: Maybe<GraphSiteCollectionInput>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parentReference?: Maybe<GraphItemReferenceInput>;
  webUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphPublicErrorInput = {
  code?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<GraphPublicErrorDetailInput>>>;
  innerError?: Maybe<GraphPublicInnerErrorInput>;
  message?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type GraphPublicErrorDetailInput = {
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type GraphPublicInnerErrorInput = {
  code?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<GraphPublicErrorDetailInput>>>;
  message?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphRootInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphSharepointIdsInput = {
  listId?: Maybe<Scalars['String']>;
  listItemId?: Maybe<Scalars['String']>;
  listItemUniqueId?: Maybe<Scalars['String']>;
  siteId?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  webId?: Maybe<Scalars['String']>;
};

export type GraphSiteCollectionInput = {
  dataLocationCode?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  root?: Maybe<GraphRootInput>;
};

export type GraphIdentitySetInput = {
  application?: Maybe<GraphIdentityInput>;
  device?: Maybe<GraphIdentityInput>;
  user?: Maybe<GraphIdentityInput>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphIdentityInput = {
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphItemReferenceInput = {
  driveId?: Maybe<Scalars['String']>;
  driveType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  shareId?: Maybe<Scalars['String']>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  siteId?: Maybe<Scalars['String']>;
};



export enum GraphComplianceState {
  unknown = 'unknown',
  compliant = 'compliant',
  noncompliant = 'noncompliant',
  conflict = 'conflict',
  error = 'error',
  inGracePeriod = 'inGracePeriod',
  configManager = 'configManager'
}

export enum GraphDeviceEnrollmentType {
  unknown = 'unknown',
  userEnrollment = 'userEnrollment',
  deviceEnrollmentManager = 'deviceEnrollmentManager',
  appleBulkWithUser = 'appleBulkWithUser',
  appleBulkWithoutUser = 'appleBulkWithoutUser',
  windowsAzureADJoin = 'windowsAzureADJoin',
  windowsBulkUserless = 'windowsBulkUserless',
  windowsAutoEnrollment = 'windowsAutoEnrollment',
  windowsBulkAzureDomainJoin = 'windowsBulkAzureDomainJoin',
  windowsCoManagement = 'windowsCoManagement'
}

export enum GraphDeviceRegistrationState {
  notRegistered = 'notRegistered',
  registered = 'registered',
  revoked = 'revoked',
  keyConflict = 'keyConflict',
  approvalPending = 'approvalPending',
  certificateReset = 'certificateReset',
  notRegisteredPendingEnrollment = 'notRegisteredPendingEnrollment',
  unknown = 'unknown'
}

export enum GraphDeviceManagementExchangeAccessState {
  none = 'none',
  unknown = 'unknown',
  allowed = 'allowed',
  blocked = 'blocked',
  quarantined = 'quarantined'
}

export enum GraphDeviceManagementExchangeAccessStateReason {
  none = 'none',
  unknown = 'unknown',
  exchangeGlobalRule = 'exchangeGlobalRule',
  exchangeIndividualRule = 'exchangeIndividualRule',
  exchangeDeviceRule = 'exchangeDeviceRule',
  exchangeUpgrade = 'exchangeUpgrade',
  exchangeMailboxPolicy = 'exchangeMailboxPolicy',
  other = 'other',
  compliant = 'compliant',
  notCompliant = 'notCompliant',
  notEnrolled = 'notEnrolled',
  unknownLocation = 'unknownLocation',
  mfaRequired = 'mfaRequired',
  azureADBlockDueToAccessPolicy = 'azureADBlockDueToAccessPolicy',
  compromisedPassword = 'compromisedPassword',
  deviceNotKnownWithManagedApp = 'deviceNotKnownWithManagedApp'
}

export enum GraphManagedDeviceOwnerType {
  unknown = 'unknown',
  company = 'company',
  personal = 'personal'
}

export enum GraphManagementAgentType {
  eas = 'eas',
  mdm = 'mdm',
  easMdm = 'easMdm',
  intuneClient = 'intuneClient',
  easIntuneClient = 'easIntuneClient',
  configurationManagerClient = 'configurationManagerClient',
  configurationManagerClientMdm = 'configurationManagerClientMdm',
  configurationManagerClientMdmEas = 'configurationManagerClientMdmEas',
  unknown = 'unknown',
  jamf = 'jamf',
  googleCloudDevicePolicyController = 'googleCloudDevicePolicyController'
}

export enum GraphManagedDevicePartnerReportedHealthState {
  unknown = 'unknown',
  activated = 'activated',
  deactivated = 'deactivated',
  secured = 'secured',
  lowSeverity = 'lowSeverity',
  mediumSeverity = 'mediumSeverity',
  highSeverity = 'highSeverity',
  unresponsive = 'unresponsive',
  compromised = 'compromised',
  misconfigured = 'misconfigured'
}

export type GraphManagedDeviceInput = {
  activationLockBypassCode?: Maybe<Scalars['String']>;
  androidSecurityPatchLevel?: Maybe<Scalars['String']>;
  azureADDeviceId?: Maybe<Scalars['String']>;
  azureADRegistered?: Maybe<Scalars['Boolean']>;
  complianceGracePeriodExpirationDateTime: Scalars['DateTime'];
  complianceState: GraphComplianceState;
  configurationManagerClientEnabledFeatures?: Maybe<GraphConfigurationManagerClientEnabledFeaturesInput>;
  deviceActionResults?: Maybe<Array<Maybe<GraphDeviceActionResultInput>>>;
  deviceCategoryDisplayName?: Maybe<Scalars['String']>;
  deviceEnrollmentType: GraphDeviceEnrollmentType;
  deviceHealthAttestationState?: Maybe<GraphDeviceHealthAttestationStateInput>;
  deviceName?: Maybe<Scalars['String']>;
  deviceRegistrationState: GraphDeviceRegistrationState;
  easActivated: Scalars['Boolean'];
  easActivationDateTime: Scalars['DateTime'];
  easDeviceId?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  enrolledDateTime: Scalars['DateTime'];
  exchangeAccessState: GraphDeviceManagementExchangeAccessState;
  exchangeAccessStateReason: GraphDeviceManagementExchangeAccessStateReason;
  exchangeLastSuccessfulSyncDateTime: Scalars['DateTime'];
  freeStorageSpaceInBytes: Scalars['BigInt'];
  imei?: Maybe<Scalars['String']>;
  isEncrypted: Scalars['Boolean'];
  isSupervised: Scalars['Boolean'];
  jailBroken?: Maybe<Scalars['String']>;
  lastSyncDateTime: Scalars['DateTime'];
  managedDeviceName?: Maybe<Scalars['String']>;
  managedDeviceOwnerType: GraphManagedDeviceOwnerType;
  managementAgent: GraphManagementAgentType;
  manufacturer?: Maybe<Scalars['String']>;
  meid?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  operatingSystem?: Maybe<Scalars['String']>;
  osVersion?: Maybe<Scalars['String']>;
  partnerReportedThreatState: GraphManagedDevicePartnerReportedHealthState;
  phoneNumber?: Maybe<Scalars['String']>;
  remoteAssistanceSessionErrorDetails?: Maybe<Scalars['String']>;
  remoteAssistanceSessionUrl?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  subscriberCarrier?: Maybe<Scalars['String']>;
  totalStorageSpaceInBytes: Scalars['BigInt'];
  userDisplayName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPrincipalName?: Maybe<Scalars['String']>;
  wiFiMacAddress?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphConfigurationManagerClientEnabledFeaturesInput = {
  compliancePolicy: Scalars['Boolean'];
  deviceConfiguration: Scalars['Boolean'];
  inventory: Scalars['Boolean'];
  modernApps: Scalars['Boolean'];
  resourceAccess: Scalars['Boolean'];
  windowsUpdateForBusiness: Scalars['Boolean'];
};

export type GraphDeviceActionResultInput = {
  actionName?: Maybe<Scalars['String']>;
  actionState: GraphActionState;
  lastUpdatedDateTime: Scalars['DateTime'];
  startDateTime: Scalars['DateTime'];
};

export enum GraphActionState {
  none = 'none',
  pending = 'pending',
  canceled = 'canceled',
  active = 'active',
  done = 'done',
  failed = 'failed',
  notSupported = 'notSupported'
}

export type GraphDeviceHealthAttestationStateInput = {
  attestationIdentityKey?: Maybe<Scalars['String']>;
  bitLockerStatus?: Maybe<Scalars['String']>;
  bootAppSecurityVersion?: Maybe<Scalars['String']>;
  bootDebugging?: Maybe<Scalars['String']>;
  bootManagerSecurityVersion?: Maybe<Scalars['String']>;
  bootManagerVersion?: Maybe<Scalars['String']>;
  bootRevisionListInfo?: Maybe<Scalars['String']>;
  codeIntegrity?: Maybe<Scalars['String']>;
  codeIntegrityCheckVersion?: Maybe<Scalars['String']>;
  codeIntegrityPolicy?: Maybe<Scalars['String']>;
  contentNamespaceUrl?: Maybe<Scalars['String']>;
  contentVersion?: Maybe<Scalars['String']>;
  dataExcutionPolicy?: Maybe<Scalars['String']>;
  deviceHealthAttestationStatus?: Maybe<Scalars['String']>;
  earlyLaunchAntiMalwareDriverProtection?: Maybe<Scalars['String']>;
  healthAttestationSupportedStatus?: Maybe<Scalars['String']>;
  healthStatusMismatchInfo?: Maybe<Scalars['String']>;
  issuedDateTime: Scalars['DateTime'];
  lastUpdateDateTime?: Maybe<Scalars['String']>;
  operatingSystemKernelDebugging?: Maybe<Scalars['String']>;
  operatingSystemRevListInfo?: Maybe<Scalars['String']>;
  pcr0?: Maybe<Scalars['String']>;
  pcrHashAlgorithm?: Maybe<Scalars['String']>;
  resetCount: Scalars['BigInt'];
  restartCount: Scalars['BigInt'];
  safeMode?: Maybe<Scalars['String']>;
  secureBoot?: Maybe<Scalars['String']>;
  secureBootConfigurationPolicyFingerPrint?: Maybe<Scalars['String']>;
  testSigning?: Maybe<Scalars['String']>;
  tpmVersion?: Maybe<Scalars['String']>;
  virtualSecureMode?: Maybe<Scalars['String']>;
  windowsPE?: Maybe<Scalars['String']>;
};

export type GraphUpdateWindowsDeviceAccountActionParameterInput = {
  calendarSyncEnabled?: Maybe<Scalars['Boolean']>;
  deviceAccount?: Maybe<GraphWindowsDeviceAccountInput>;
  deviceAccountEmail?: Maybe<Scalars['String']>;
  exchangeServer?: Maybe<Scalars['String']>;
  passwordRotationEnabled?: Maybe<Scalars['Boolean']>;
  sessionInitiationProtocalAddress?: Maybe<Scalars['String']>;
};

export type GraphWindowsDeviceAccountInput = {
  password?: Maybe<Scalars['String']>;
};








export enum GraphStatus {
  active = 'active',
  updated = 'updated',
  deleted = 'deleted',
  ignored = 'ignored',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphOnlineMeetingPresenters {
  everyone = 'everyone',
  organization = 'organization',
  roleIsPresenter = 'roleIsPresenter',
  organizer = 'organizer',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphOnlineMeetingInput = {
  allowedPresenters?: Maybe<GraphOnlineMeetingPresenters>;
  audioConferencing?: Maybe<GraphAudioConferencingInput>;
  chatInfo?: Maybe<GraphChatInfoInput>;
  creationDateTime?: Maybe<Scalars['DateTime']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  isEntryExitAnnounced?: Maybe<Scalars['Boolean']>;
  joinInformation?: Maybe<GraphItemBodyInput>;
  joinWebUrl?: Maybe<Scalars['String']>;
  lobbyBypassSettings?: Maybe<GraphLobbyBypassSettingsInput>;
  participants?: Maybe<GraphMeetingParticipantsInput>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  subject?: Maybe<Scalars['String']>;
  videoTeleconferenceId?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphAudioConferencingInput = {
  conferenceId?: Maybe<Scalars['String']>;
  dialinUrl?: Maybe<Scalars['String']>;
  tollFreeNumber?: Maybe<Scalars['String']>;
  tollNumber?: Maybe<Scalars['String']>;
};

export type GraphChatInfoInput = {
  messageId?: Maybe<Scalars['String']>;
  replyChainMessageId?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
};

export type GraphLobbyBypassSettingsInput = {
  isDialInBypassEnabled?: Maybe<Scalars['Boolean']>;
  scope?: Maybe<GraphLobbyBypassScope>;
};

export enum GraphLobbyBypassScope {
  organizer = 'organizer',
  organization = 'organization',
  organizationAndFederated = 'organizationAndFederated',
  everyone = 'everyone',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphMeetingParticipantsInput = {
  attendees?: Maybe<Array<Maybe<GraphMeetingParticipantInfoInput>>>;
  organizer?: Maybe<GraphMeetingParticipantInfoInput>;
};

export type GraphMeetingParticipantInfoInput = {
  identity?: Maybe<GraphIdentitySetInput>;
  role?: Maybe<GraphOnlineMeetingRole>;
  upn?: Maybe<Scalars['String']>;
};

export enum GraphOnlineMeetingRole {
  attendee = 'attendee',
  presenter = 'presenter',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphTeamSpecialization {
  none = 'none',
  educationStandard = 'educationStandard',
  educationClass = 'educationClass',
  educationProfessionalLearningCommunity = 'educationProfessionalLearningCommunity',
  educationStaff = 'educationStaff',
  healthcareStandard = 'healthcareStandard',
  healthcareCareCoordination = 'healthcareCareCoordination',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphTeamVisibilityType {
  private = 'private',
  public = 'public',
  hiddenMembership = 'hiddenMembership',
  unknownFutureValue = 'unknownFutureValue'
}


export type GraphTeamInput = {
  classification?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  funSettings?: Maybe<GraphTeamFunSettingsInput>;
  guestSettings?: Maybe<GraphTeamGuestSettingsInput>;
  internalId?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  memberSettings?: Maybe<GraphTeamMemberSettingsInput>;
  messagingSettings?: Maybe<GraphTeamMessagingSettingsInput>;
  specialization?: Maybe<GraphTeamSpecialization>;
  visibility?: Maybe<GraphTeamVisibilityType>;
  webUrl?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphTeamFunSettingsInput = {
  allowCustomMemes?: Maybe<Scalars['Boolean']>;
  allowGiphy?: Maybe<Scalars['Boolean']>;
  allowStickersAndMemes?: Maybe<Scalars['Boolean']>;
  giphyContentRating?: Maybe<GraphGiphyRatingType>;
};

export enum GraphGiphyRatingType {
  strict = 'strict',
  moderate = 'moderate',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphTeamGuestSettingsInput = {
  allowCreateUpdateChannels?: Maybe<Scalars['Boolean']>;
  allowDeleteChannels?: Maybe<Scalars['Boolean']>;
};

export type GraphTeamMemberSettingsInput = {
  allowAddRemoveApps?: Maybe<Scalars['Boolean']>;
  allowCreatePrivateChannels?: Maybe<Scalars['Boolean']>;
  allowCreateUpdateChannels?: Maybe<Scalars['Boolean']>;
  allowCreateUpdateRemoveConnectors?: Maybe<Scalars['Boolean']>;
  allowCreateUpdateRemoveTabs?: Maybe<Scalars['Boolean']>;
  allowDeleteChannels?: Maybe<Scalars['Boolean']>;
};

export type GraphTeamMessagingSettingsInput = {
  allowChannelMentions?: Maybe<Scalars['Boolean']>;
  allowOwnerDeleteMessages?: Maybe<Scalars['Boolean']>;
  allowTeamMentions?: Maybe<Scalars['Boolean']>;
  allowUserDeleteMessages?: Maybe<Scalars['Boolean']>;
  allowUserEditMessages?: Maybe<Scalars['Boolean']>;
};

export enum GraphClonableTeamParts {
  apps = 'apps',
  tabs = 'tabs',
  settings = 'settings',
  channels = 'channels',
  members = 'members'
}




export type GraphApplicationInput = {
  addIns: Array<Maybe<GraphAddInInput>>;
  api?: Maybe<GraphApiApplicationInput>;
  appId?: Maybe<Scalars['String']>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  appRoles: Array<Maybe<GraphAppRoleInput>>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  groupMembershipClaims?: Maybe<Scalars['String']>;
  identifierUris: Array<Maybe<Scalars['String']>>;
  info?: Maybe<GraphInformationalUrlInput>;
  isDeviceOnlyAuthSupported?: Maybe<Scalars['Boolean']>;
  isFallbackPublicClient?: Maybe<Scalars['Boolean']>;
  keyCredentials: Array<Maybe<GraphKeyCredentialInput>>;
  logo: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  oauth2RequirePostResponse: Scalars['Boolean'];
  optionalClaims?: Maybe<GraphOptionalClaimsInput>;
  parentalControlSettings?: Maybe<GraphParentalControlSettingsInput>;
  passwordCredentials: Array<Maybe<GraphPasswordCredentialInput>>;
  publicClient?: Maybe<GraphPublicClientApplicationInput>;
  publisherDomain?: Maybe<Scalars['String']>;
  requiredResourceAccess: Array<Maybe<GraphRequiredResourceAccessInput>>;
  signInAudience?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  tokenEncryptionKeyId?: Maybe<Scalars['GUID']>;
  web?: Maybe<GraphWebApplicationInput>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphAddInInput = {
  id?: Maybe<Scalars['GUID']>;
  properties: Array<Maybe<GraphKeyValueInput>>;
  type: Scalars['String'];
};

export type GraphKeyValueInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphApiApplicationInput = {
  acceptMappedClaims?: Maybe<Scalars['Boolean']>;
  knownClientApplications?: Maybe<Array<Maybe<Scalars['GUID']>>>;
  oauth2PermissionScopes: Array<Maybe<GraphPermissionScopeInput>>;
  preAuthorizedApplications?: Maybe<Array<Maybe<GraphPreAuthorizedApplicationInput>>>;
  requestedAccessTokenVersion?: Maybe<Scalars['Int']>;
};

export type GraphPermissionScopeInput = {
  adminConsentDescription?: Maybe<Scalars['String']>;
  adminConsentDisplayName?: Maybe<Scalars['String']>;
  id: Scalars['GUID'];
  isEnabled: Scalars['Boolean'];
  origin?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userConsentDescription?: Maybe<Scalars['String']>;
  userConsentDisplayName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphPreAuthorizedApplicationInput = {
  appId?: Maybe<Scalars['String']>;
  delegatedPermissionIds: Array<Maybe<Scalars['String']>>;
};

export type GraphAppRoleInput = {
  allowedMemberTypes: Array<Maybe<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['GUID'];
  isEnabled: Scalars['Boolean'];
  origin?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphInformationalUrlInput = {
  logoUrl?: Maybe<Scalars['String']>;
  marketingUrl?: Maybe<Scalars['String']>;
  privacyStatementUrl?: Maybe<Scalars['String']>;
  supportUrl?: Maybe<Scalars['String']>;
  termsOfServiceUrl?: Maybe<Scalars['String']>;
};

export type GraphKeyCredentialInput = {
  customKeyIdentifier?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  keyId?: Maybe<Scalars['GUID']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
};

export type GraphOptionalClaimsInput = {
  accessToken?: Maybe<Array<Maybe<GraphOptionalClaimInput>>>;
  idToken?: Maybe<Array<Maybe<GraphOptionalClaimInput>>>;
  saml2Token?: Maybe<Array<Maybe<GraphOptionalClaimInput>>>;
};

export type GraphOptionalClaimInput = {
  additionalProperties?: Maybe<Array<Maybe<Scalars['String']>>>;
  essential: Scalars['Boolean'];
  name: Scalars['String'];
  source?: Maybe<Scalars['String']>;
};

export type GraphParentalControlSettingsInput = {
  countriesBlockedForMinors?: Maybe<Array<Maybe<Scalars['String']>>>;
  legalAgeGroupRule?: Maybe<Scalars['String']>;
};

export type GraphPasswordCredentialInput = {
  customKeyIdentifier?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  hint?: Maybe<Scalars['String']>;
  keyId?: Maybe<Scalars['GUID']>;
  secretText?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type GraphPublicClientApplicationInput = {
  redirectUris: Array<Maybe<Scalars['String']>>;
};

export type GraphRequiredResourceAccessInput = {
  resourceAccess: Array<Maybe<GraphResourceAccessInput>>;
  resourceAppId: Scalars['String'];
};

export type GraphResourceAccessInput = {
  id: Scalars['GUID'];
  type?: Maybe<Scalars['String']>;
};

export type GraphWebApplicationInput = {
  homePageUrl?: Maybe<Scalars['String']>;
  implicitGrantSettings?: Maybe<GraphImplicitGrantSettingsInput>;
  logoutUrl?: Maybe<Scalars['String']>;
  redirectUris: Array<Maybe<Scalars['String']>>;
};

export type GraphImplicitGrantSettingsInput = {
  enableAccessTokenIssuance?: Maybe<Scalars['Boolean']>;
  enableIdTokenIssuance?: Maybe<Scalars['Boolean']>;
};










export type GraphServicePrincipalInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  addIns: Array<Maybe<GraphAddInInput>>;
  alternativeNames: Array<Maybe<Scalars['String']>>;
  appDescription?: Maybe<Scalars['String']>;
  appDisplayName?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  appOwnerOrganizationId?: Maybe<Scalars['GUID']>;
  appRoleAssignmentRequired: Scalars['Boolean'];
  appRoles: Array<Maybe<GraphAppRoleInput>>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  info?: Maybe<GraphInformationalUrlInput>;
  keyCredentials: Array<Maybe<GraphKeyCredentialInput>>;
  loginUrl?: Maybe<Scalars['String']>;
  logoutUrl?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  notificationEmailAddresses: Array<Maybe<Scalars['String']>>;
  oauth2PermissionScopes: Array<Maybe<GraphPermissionScopeInput>>;
  passwordCredentials: Array<Maybe<GraphPasswordCredentialInput>>;
  preferredSingleSignOnMode?: Maybe<Scalars['String']>;
  preferredTokenSigningKeyThumbprint?: Maybe<Scalars['String']>;
  replyUrls: Array<Maybe<Scalars['String']>>;
  samlSingleSignOnSettings?: Maybe<GraphSamlSingleSignOnSettingsInput>;
  servicePrincipalNames: Array<Maybe<Scalars['String']>>;
  servicePrincipalType?: Maybe<Scalars['String']>;
  signInAudience?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  tokenEncryptionKeyId?: Maybe<Scalars['GUID']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphSamlSingleSignOnSettingsInput = {
  relayState?: Maybe<Scalars['String']>;
};



export enum GraphPermissionClassificationType {
  low = 'low',
  medium = 'medium',
  high = 'high',
  unknownFutureValue = 'unknownFutureValue'
}








export enum GraphAllowInvitesFrom {
  none = 'none',
  adminsAndGuestInviters = 'adminsAndGuestInviters',
  adminsGuestInvitersAndAllMembers = 'adminsGuestInvitersAndAllMembers',
  everyone = 'everyone',
  unknownFutureValue = 'unknownFutureValue'
}








export type GraphDomainInput = {
  authenticationType: Scalars['String'];
  availabilityStatus?: Maybe<Scalars['String']>;
  isAdminManaged: Scalars['Boolean'];
  isDefault: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isRoot: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  passwordNotificationWindowInDays?: Maybe<Scalars['Int']>;
  passwordValidityPeriodInDays?: Maybe<Scalars['Int']>;
  state?: Maybe<GraphDomainStateInput>;
  supportedServices: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
};

export type GraphDomainStateInput = {
  lastActionDateTime?: Maybe<Scalars['DateTime']>;
  operation?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};



export type GraphGroupInput = {
  assignedLabels?: Maybe<Array<Maybe<GraphAssignedLabelInput>>>;
  assignedLicenses?: Maybe<Array<Maybe<GraphAssignedLicenseInput>>>;
  classification?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expirationDateTime?: Maybe<Scalars['DateTime']>;
  groupTypes: Array<Maybe<Scalars['String']>>;
  hasMembersWithLicenseErrors?: Maybe<Scalars['Boolean']>;
  licenseProcessingState?: Maybe<GraphLicenseProcessingStateInput>;
  mail?: Maybe<Scalars['String']>;
  mailEnabled?: Maybe<Scalars['Boolean']>;
  mailNickname?: Maybe<Scalars['String']>;
  membershipRule?: Maybe<Scalars['String']>;
  membershipRuleProcessingState?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesNetBiosName?: Maybe<Scalars['String']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSamAccountName?: Maybe<Scalars['String']>;
  onPremisesSecurityIdentifier?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  preferredDataLocation?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  proxyAddresses: Array<Maybe<Scalars['String']>>;
  renewedDateTime?: Maybe<Scalars['DateTime']>;
  securityEnabled?: Maybe<Scalars['Boolean']>;
  securityIdentifier?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  allowExternalSenders?: Maybe<Scalars['Boolean']>;
  autoSubscribeNewMembers?: Maybe<Scalars['Boolean']>;
  hideFromAddressLists?: Maybe<Scalars['Boolean']>;
  hideFromOutlookClients?: Maybe<Scalars['Boolean']>;
  isSubscribedByMail?: Maybe<Scalars['Boolean']>;
  unseenCount?: Maybe<Scalars['Int']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphAssignedLabelInput = {
  displayName?: Maybe<Scalars['String']>;
  labelId?: Maybe<Scalars['String']>;
};

export type GraphLicenseProcessingStateInput = {
  state?: Maybe<Scalars['String']>;
};





export type GraphConversationThreadInput = {
  ccRecipients: Array<Maybe<GraphRecipientInput>>;
  hasAttachments: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  lastDeliveredDateTime: Scalars['DateTime'];
  preview: Scalars['String'];
  topic: Scalars['String'];
  toRecipients: Array<Maybe<GraphRecipientInput>>;
  uniqueSenders: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
};

export type GraphPostInput = {
  body?: Maybe<GraphItemBodyInput>;
  conversationId?: Maybe<Scalars['String']>;
  conversationThreadId?: Maybe<Scalars['String']>;
  from: GraphRecipientInput;
  hasAttachments: Scalars['Boolean'];
  newParticipants: Array<Maybe<GraphRecipientInput>>;
  receivedDateTime: Scalars['DateTime'];
  sender?: Maybe<GraphRecipientInput>;
  rest?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  changeKey?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};


export type GraphGroupLifecyclePolicyInput = {
  alternateNotificationEmails?: Maybe<Scalars['String']>;
  groupLifetimeInDays?: Maybe<Scalars['Int']>;
  managedGroupTypes?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};




export enum GraphMdmAuthority {
  unknown = 'unknown',
  intune = 'intune',
  sccm = 'sccm',
  office365 = 'office365'
}

export type GraphOrganizationInput = {
  assignedPlans: Array<Maybe<GraphAssignedPlanInput>>;
  businessPhones: Array<Maybe<Scalars['String']>>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryLetterCode?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  marketingNotificationEmails: Array<Maybe<Scalars['String']>>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  privacyProfile?: Maybe<GraphPrivacyProfileInput>;
  provisionedPlans: Array<Maybe<GraphProvisionedPlanInput>>;
  securityComplianceNotificationMails: Array<Maybe<Scalars['String']>>;
  securityComplianceNotificationPhones: Array<Maybe<Scalars['String']>>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  technicalNotificationMails: Array<Maybe<Scalars['String']>>;
  tenantType?: Maybe<Scalars['String']>;
  verifiedDomains: Array<Maybe<GraphVerifiedDomainInput>>;
  mobileDeviceManagementAuthority: GraphMdmAuthority;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphPrivacyProfileInput = {
  contactEmail?: Maybe<Scalars['String']>;
  statementUrl?: Maybe<Scalars['String']>;
};

export type GraphVerifiedDomainInput = {
  capabilities?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isInitial?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};



export enum GraphPermissionType {
  application = 'application',
  delegated = 'delegated',
  delegatedUserConsentable = 'delegatedUserConsentable'
}




export enum GraphConditionalAccessPolicyState {
  enabled = 'enabled',
  disabled = 'disabled',
  enabledForReportingButNotEnforced = 'enabledForReportingButNotEnforced'
}




export enum GraphEducationExternalSource {
  sis = 'sis',
  manual = 'manual',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphEducationUserRole {
  student = 'student',
  teacher = 'teacher',
  none = 'none',
  unknownFutureValue = 'unknownFutureValue'
}






export type GraphDriveItemInput = {
  audio?: Maybe<GraphAudioInput>;
  content?: Maybe<Scalars['String']>;
  cTag?: Maybe<Scalars['String']>;
  deleted?: Maybe<GraphDeletedInput>;
  file?: Maybe<GraphFileInput>;
  fileSystemInfo?: Maybe<GraphFileSystemInfoInput>;
  folder?: Maybe<GraphFolderInput>;
  image?: Maybe<GraphImageInput>;
  location?: Maybe<GraphGeoCoordinatesInput>;
  package?: Maybe<GraphPackageInput>;
  pendingOperations?: Maybe<GraphPendingOperationsInput>;
  photo?: Maybe<GraphPhotoInput>;
  publication?: Maybe<GraphPublicationFacetInput>;
  remoteItem?: Maybe<GraphRemoteItemInput>;
  root?: Maybe<GraphRootInput>;
  searchResult?: Maybe<GraphSearchResultInput>;
  shared?: Maybe<GraphSharedInput>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  size?: Maybe<Scalars['BigInt']>;
  specialFolder?: Maybe<GraphSpecialFolderInput>;
  video?: Maybe<GraphVideoInput>;
  webDavUrl?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parentReference?: Maybe<GraphItemReferenceInput>;
  webUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphAudioInput = {
  album?: Maybe<Scalars['String']>;
  albumArtist?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  bitrate?: Maybe<Scalars['BigInt']>;
  composers?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  disc?: Maybe<Scalars['Int']>;
  discCount?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['BigInt']>;
  genre?: Maybe<Scalars['String']>;
  hasDrm?: Maybe<Scalars['Boolean']>;
  isVariableBitrate?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  track?: Maybe<Scalars['Int']>;
  trackCount?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type GraphDeletedInput = {
  state?: Maybe<Scalars['String']>;
};

export type GraphFileInput = {
  hashes?: Maybe<GraphHashesInput>;
  mimeType?: Maybe<Scalars['String']>;
  processingMetadata?: Maybe<Scalars['Boolean']>;
};

export type GraphHashesInput = {
  crc32Hash?: Maybe<Scalars['String']>;
  quickXorHash?: Maybe<Scalars['String']>;
  sha1Hash?: Maybe<Scalars['String']>;
  sha256Hash?: Maybe<Scalars['String']>;
};

export type GraphFileSystemInfoInput = {
  createdDateTime?: Maybe<Scalars['DateTime']>;
  lastAccessedDateTime?: Maybe<Scalars['DateTime']>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
};

export type GraphFolderInput = {
  childCount?: Maybe<Scalars['Int']>;
  view?: Maybe<GraphFolderViewInput>;
};

export type GraphFolderViewInput = {
  sortBy?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  viewType?: Maybe<Scalars['String']>;
};

export type GraphImageInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type GraphGeoCoordinatesInput = {
  altitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type GraphPackageInput = {
  type?: Maybe<Scalars['String']>;
};

export type GraphPendingOperationsInput = {
  pendingContentUpdate?: Maybe<GraphPendingContentUpdateInput>;
};

export type GraphPendingContentUpdateInput = {
  queuedDateTime?: Maybe<Scalars['DateTime']>;
};

export type GraphPhotoInput = {
  cameraMake?: Maybe<Scalars['String']>;
  cameraModel?: Maybe<Scalars['String']>;
  exposureDenominator?: Maybe<Scalars['Float']>;
  exposureNumerator?: Maybe<Scalars['Float']>;
  fNumber?: Maybe<Scalars['Float']>;
  focalLength?: Maybe<Scalars['Float']>;
  iso?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['Int']>;
  takenDateTime?: Maybe<Scalars['DateTime']>;
};

export type GraphPublicationFacetInput = {
  level?: Maybe<Scalars['String']>;
  versionId?: Maybe<Scalars['String']>;
};

export type GraphRemoteItemInput = {
  createdBy?: Maybe<GraphIdentitySetInput>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  file?: Maybe<GraphFileInput>;
  fileSystemInfo?: Maybe<GraphFileSystemInfoInput>;
  folder?: Maybe<GraphFolderInput>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<GraphImageInput>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  package?: Maybe<GraphPackageInput>;
  parentReference?: Maybe<GraphItemReferenceInput>;
  shared?: Maybe<GraphSharedInput>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  size?: Maybe<Scalars['BigInt']>;
  specialFolder?: Maybe<GraphSpecialFolderInput>;
  video?: Maybe<GraphVideoInput>;
  webDavUrl?: Maybe<Scalars['String']>;
  webUrl?: Maybe<Scalars['String']>;
};

export type GraphSharedInput = {
  owner?: Maybe<GraphIdentitySetInput>;
  scope?: Maybe<Scalars['String']>;
  sharedBy?: Maybe<GraphIdentitySetInput>;
  sharedDateTime?: Maybe<Scalars['DateTime']>;
};

export type GraphSpecialFolderInput = {
  name?: Maybe<Scalars['String']>;
};

export type GraphVideoInput = {
  audioBitsPerSample?: Maybe<Scalars['Int']>;
  audioChannels?: Maybe<Scalars['Int']>;
  audioFormat?: Maybe<Scalars['String']>;
  audioSamplesPerSecond?: Maybe<Scalars['Int']>;
  bitrate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['BigInt']>;
  fourCC?: Maybe<Scalars['String']>;
  frameRate?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type GraphSearchResultInput = {
  onClickTelemetryUrl?: Maybe<Scalars['String']>;
};

export type GraphDriveItemUploadablePropertiesInput = {
  description?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['BigInt']>;
  fileSystemInfo?: Maybe<GraphFileSystemInfoInput>;
  name?: Maybe<Scalars['String']>;
};

export type GraphDriveRecipientInput = {
  alias?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  objectId?: Maybe<Scalars['String']>;
};



export type GraphWorkbookInput = {
  id: Scalars['String'];
};




export type GraphPermissionInput = {
  expirationDateTime?: Maybe<Scalars['DateTime']>;
  grantedTo?: Maybe<GraphIdentitySetInput>;
  grantedToIdentities?: Maybe<Array<Maybe<GraphIdentitySetInput>>>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  inheritedFrom?: Maybe<GraphItemReferenceInput>;
  invitation?: Maybe<GraphSharingInvitationInput>;
  link?: Maybe<GraphSharingLinkInput>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  shareId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphSharingInvitationInput = {
  email?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<GraphIdentitySetInput>;
  redeemedBy?: Maybe<Scalars['String']>;
  signInRequired?: Maybe<Scalars['Boolean']>;
};

export type GraphSharingLinkInput = {
  application?: Maybe<GraphIdentityInput>;
  preventsDownload?: Maybe<Scalars['Boolean']>;
  scope?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  webHtml?: Maybe<Scalars['String']>;
  webUrl?: Maybe<Scalars['String']>;
};






export type GraphDriveItemVersionInput = {
  content?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['BigInt']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  publication?: Maybe<GraphPublicationFacetInput>;
  id: Scalars['String'];
};




export type GraphWorkbookApplicationInput = {
  calculationMode: Scalars['String'];
  id: Scalars['String'];
};



export type GraphWorkbookFunctionsInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphJsonInput = {
  rest?: Maybe<Scalars['JSON']>;
};


export type GraphWorkbookNamedItemInput = {
  comment?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  scope: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  value?: Maybe<GraphJsonInput>;
  visible: Scalars['Boolean'];
  id: Scalars['String'];
};


export enum GraphWorkbookOperationStatus {
  notStarted = 'notStarted',
  running = 'running',
  succeeded = 'succeeded',
  failed = 'failed'
}


export type GraphWorkbookTableInput = {
  highlightFirstColumn: Scalars['Boolean'];
  highlightLastColumn: Scalars['Boolean'];
  legacyId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  showBandedColumns: Scalars['Boolean'];
  showBandedRows: Scalars['Boolean'];
  showFilterButton: Scalars['Boolean'];
  showHeaders: Scalars['Boolean'];
  showTotals: Scalars['Boolean'];
  style?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type GraphWorkbookWorksheetInput = {
  name?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  visibility: Scalars['String'];
  id: Scalars['String'];
};


export type GraphWorkbookChartInput = {
  height: Scalars['Float'];
  left: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  top: Scalars['Float'];
  width: Scalars['Float'];
  id: Scalars['String'];
};








export type GraphWorkbookChartFillInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};







export type GraphWorkbookChartLineFormatInput = {
  color?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};











export type GraphWorkbookFilterInput = {
  criteria?: Maybe<GraphWorkbookFilterCriteriaInput>;
  id: Scalars['String'];
};

export type GraphWorkbookFilterCriteriaInput = {
  color?: Maybe<Scalars['String']>;
  criterion1?: Maybe<Scalars['String']>;
  criterion2?: Maybe<Scalars['String']>;
  dynamicCriteria: Scalars['String'];
  filterOn: Scalars['String'];
  icon?: Maybe<GraphWorkbookIconInput>;
  operator: Scalars['String'];
  values?: Maybe<GraphJsonInput>;
};

export type GraphWorkbookIconInput = {
  index: Scalars['Int'];
  set: Scalars['String'];
};




export type GraphWorkbookPivotTableInput = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type GraphWorkbookRangeInput = {
  address?: Maybe<Scalars['String']>;
  addressLocal?: Maybe<Scalars['String']>;
  cellCount: Scalars['Int'];
  columnCount: Scalars['Int'];
  columnHidden?: Maybe<Scalars['Boolean']>;
  columnIndex: Scalars['Int'];
  formulas?: Maybe<GraphJsonInput>;
  formulasLocal?: Maybe<GraphJsonInput>;
  formulasR1C1?: Maybe<GraphJsonInput>;
  hidden?: Maybe<Scalars['Boolean']>;
  numberFormat?: Maybe<GraphJsonInput>;
  rowCount: Scalars['Int'];
  rowHidden?: Maybe<Scalars['Boolean']>;
  rowIndex: Scalars['Int'];
  text?: Maybe<GraphJsonInput>;
  values?: Maybe<GraphJsonInput>;
  valueTypes?: Maybe<GraphJsonInput>;
  id: Scalars['String'];
};


export type GraphWorkbookRangeFormatInput = {
  columnWidth?: Maybe<Scalars['Float']>;
  horizontalAlignment?: Maybe<Scalars['String']>;
  rowHeight?: Maybe<Scalars['Float']>;
  verticalAlignment?: Maybe<Scalars['String']>;
  wrapText?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type GraphWorkbookRangeSortInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphWorkbookSortFieldInput = {
  ascending: Scalars['Boolean'];
  color?: Maybe<Scalars['String']>;
  dataOption: Scalars['String'];
  icon?: Maybe<GraphWorkbookIconInput>;
  key: Scalars['Int'];
  sortOn: Scalars['String'];
};



export type GraphWorkbookRangeFillInput = {
  color?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};




export type GraphWorkbookTableColumnInput = {
  index: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  values?: Maybe<GraphJsonInput>;
  id: Scalars['String'];
};


export type GraphWorkbookTableRowInput = {
  index: Scalars['Int'];
  values?: Maybe<GraphJsonInput>;
  id: Scalars['String'];
};


export type GraphWorkbookTableSortInput = {
  fields?: Maybe<Array<Maybe<GraphWorkbookSortFieldInput>>>;
  matchCase: Scalars['Boolean'];
  method: Scalars['String'];
  id: Scalars['String'];
};


export type GraphWorkbookWorksheetProtectionInput = {
  options?: Maybe<GraphWorkbookWorksheetProtectionOptionsInput>;
  protected: Scalars['Boolean'];
  id: Scalars['String'];
};

export type GraphWorkbookWorksheetProtectionOptionsInput = {
  allowAutoFilter: Scalars['Boolean'];
  allowDeleteColumns: Scalars['Boolean'];
  allowDeleteRows: Scalars['Boolean'];
  allowFormatCells: Scalars['Boolean'];
  allowFormatColumns: Scalars['Boolean'];
  allowFormatRows: Scalars['Boolean'];
  allowInsertColumns: Scalars['Boolean'];
  allowInsertHyperlinks: Scalars['Boolean'];
  allowInsertRows: Scalars['Boolean'];
  allowPivotTables: Scalars['Boolean'];
  allowSort: Scalars['Boolean'];
};




export enum GraphBookingType {
  unknown = 'unknown',
  standard = 'standard',
  reserved = 'reserved'
}













export enum GraphCategoryColor {
  none = 'none',
  preset0 = 'preset0',
  preset1 = 'preset1',
  preset2 = 'preset2',
  preset3 = 'preset3',
  preset4 = 'preset4',
  preset5 = 'preset5',
  preset6 = 'preset6',
  preset7 = 'preset7',
  preset8 = 'preset8',
  preset9 = 'preset9',
  preset10 = 'preset10',
  preset11 = 'preset11',
  preset12 = 'preset12',
  preset13 = 'preset13',
  preset14 = 'preset14',
  preset15 = 'preset15',
  preset16 = 'preset16',
  preset17 = 'preset17',
  preset18 = 'preset18',
  preset19 = 'preset19',
  preset20 = 'preset20',
  preset21 = 'preset21',
  preset22 = 'preset22',
  preset23 = 'preset23',
  preset24 = 'preset24'
}







export type GraphListItemVersionInput = {
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  publication?: Maybe<GraphPublicationFacetInput>;
  id: Scalars['String'];
};




export type GraphCloudCommunicationsInput = {
  id: Scalars['String'];
};



export enum GraphCallDirection {
  incoming = 'incoming',
  outgoing = 'outgoing'
}



export enum GraphModality {
  audio = 'audio',
  video = 'video',
  videoBasedScreenSharing = 'videoBasedScreenSharing',
  data = 'data',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphCallState {
  incoming = 'incoming',
  establishing = 'establishing',
  established = 'established',
  hold = 'hold',
  transferring = 'transferring',
  transferAccepted = 'transferAccepted',
  redirecting = 'redirecting',
  terminating = 'terminating',
  terminated = 'terminated',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphCallInput = {
  callbackUri: Scalars['String'];
  callChainId?: Maybe<Scalars['String']>;
  callOptions?: Maybe<GraphCallOptionsInput>;
  callRoutes?: Maybe<Array<Maybe<GraphCallRouteInput>>>;
  chatInfo?: Maybe<GraphChatInfoInput>;
  direction?: Maybe<GraphCallDirection>;
  incomingContext?: Maybe<GraphIncomingContextInput>;
  mediaConfig?: Maybe<GraphMediaConfigInput>;
  mediaState?: Maybe<GraphCallMediaStateInput>;
  meetingInfo?: Maybe<GraphMeetingInfoInput>;
  myParticipantId?: Maybe<Scalars['String']>;
  requestedModalities?: Maybe<Array<Maybe<GraphModality>>>;
  resultInfo?: Maybe<GraphResultInfoInput>;
  source?: Maybe<GraphParticipantInfoInput>;
  state?: Maybe<GraphCallState>;
  subject?: Maybe<Scalars['String']>;
  targets?: Maybe<Array<Maybe<GraphInvitationParticipantInfoInput>>>;
  tenantId?: Maybe<Scalars['String']>;
  toneInfo?: Maybe<GraphToneInfoInput>;
  transcription?: Maybe<GraphCallTranscriptionInfoInput>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphCallOptionsInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphCallRouteInput = {
  final: GraphIdentitySetInput;
  original: GraphIdentitySetInput;
  routingType: GraphRoutingType;
};

export enum GraphRoutingType {
  forwarded = 'forwarded',
  lookup = 'lookup',
  selfFork = 'selfFork',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphIncomingContextInput = {
  observedParticipantId?: Maybe<Scalars['String']>;
  onBehalfOf?: Maybe<GraphIdentitySetInput>;
  sourceParticipantId?: Maybe<Scalars['String']>;
  transferor?: Maybe<GraphIdentitySetInput>;
};

export type GraphMediaConfigInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphCallMediaStateInput = {
  audio?: Maybe<GraphMediaState>;
};

export enum GraphMediaState {
  active = 'active',
  inactive = 'inactive',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphMeetingInfoInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphResultInfoInput = {
  code: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  subcode: Scalars['Int'];
};

export type GraphParticipantInfoInput = {
  countryCode?: Maybe<Scalars['String']>;
  endpointType?: Maybe<GraphEndpointType>;
  identity: GraphIdentitySetInput;
  languageId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export enum GraphEndpointType {
  default = 'default',
  voicemail = 'voicemail',
  skypeForBusiness = 'skypeForBusiness',
  skypeForBusinessVoipPhone = 'skypeForBusinessVoipPhone',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphInvitationParticipantInfoInput = {
  identity: GraphIdentitySetInput;
  replacesCallId?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphToneInfoInput = {
  sequenceId: Scalars['BigInt'];
  tone: GraphTone;
};

export enum GraphTone {
  tone0 = 'tone0',
  tone1 = 'tone1',
  tone2 = 'tone2',
  tone3 = 'tone3',
  tone4 = 'tone4',
  tone5 = 'tone5',
  tone6 = 'tone6',
  tone7 = 'tone7',
  tone8 = 'tone8',
  tone9 = 'tone9',
  star = 'star',
  pound = 'pound',
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd',
  flash = 'flash'
}

export type GraphCallTranscriptionInfoInput = {
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  state: GraphCallTranscriptionState;
};

export enum GraphCallTranscriptionState {
  notStarted = 'notStarted',
  active = 'active',
  inactive = 'inactive',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphScreenSharingRole {
  viewer = 'viewer',
  sharer = 'sharer'
}

export type GraphPromptInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export enum GraphRejectReason {
  none = 'none',
  busy = 'busy',
  forbidden = 'forbidden',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRecordingStatus {
  unknown = 'unknown',
  notRecording = 'notRecording',
  recording = 'recording',
  failed = 'failed',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphTeleconferenceDeviceQualityInput = {
  callChainId: Scalars['GUID'];
  cloudServiceDeploymentEnvironment?: Maybe<Scalars['String']>;
  cloudServiceDeploymentId?: Maybe<Scalars['String']>;
  cloudServiceInstanceName?: Maybe<Scalars['String']>;
  cloudServiceName?: Maybe<Scalars['String']>;
  deviceDescription: Scalars['String'];
  deviceName: Scalars['String'];
  mediaLegId: Scalars['GUID'];
  mediaQualityList: Array<Maybe<GraphTeleconferenceDeviceMediaQualityInput>>;
  participantId: Scalars['GUID'];
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphTeleconferenceDeviceMediaQualityInput = {
  averageInboundJitter?: Maybe<Scalars['ISO8601Duration']>;
  averageInboundPacketLossRateInPercentage?: Maybe<Scalars['Float']>;
  averageInboundRoundTripDelay?: Maybe<Scalars['ISO8601Duration']>;
  averageOutboundJitter?: Maybe<Scalars['ISO8601Duration']>;
  averageOutboundPacketLossRateInPercentage?: Maybe<Scalars['Float']>;
  averageOutboundRoundTripDelay?: Maybe<Scalars['ISO8601Duration']>;
  channelIndex: Scalars['Int'];
  inboundPackets?: Maybe<Scalars['BigInt']>;
  localIPAddress?: Maybe<Scalars['String']>;
  localPort?: Maybe<Scalars['Int']>;
  maximumInboundJitter?: Maybe<Scalars['ISO8601Duration']>;
  maximumInboundPacketLossRateInPercentage?: Maybe<Scalars['Float']>;
  maximumInboundRoundTripDelay?: Maybe<Scalars['ISO8601Duration']>;
  maximumOutboundJitter?: Maybe<Scalars['ISO8601Duration']>;
  maximumOutboundPacketLossRateInPercentage?: Maybe<Scalars['Float']>;
  maximumOutboundRoundTripDelay?: Maybe<Scalars['ISO8601Duration']>;
  mediaDuration?: Maybe<Scalars['ISO8601Duration']>;
  networkLinkSpeedInBytes?: Maybe<Scalars['BigInt']>;
  outboundPackets?: Maybe<Scalars['BigInt']>;
  remoteIPAddress?: Maybe<Scalars['String']>;
  remotePort?: Maybe<Scalars['Int']>;
  rest?: Maybe<Scalars['JSON']>;
};





export enum GraphMobileAppPublishingState {
  notPublished = 'notPublished',
  processing = 'processing',
  published = 'published'
}

export type GraphMobileAppInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  developer?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  informationUrl?: Maybe<Scalars['String']>;
  isFeatured: Scalars['Boolean'];
  largeIcon?: Maybe<GraphMimeContentInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  notes?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  privacyInformationUrl?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publishingState: GraphMobileAppPublishingState;
  id: Scalars['String'];
};

export type GraphMimeContentInput = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphMobileAppAssignmentInput = {
  intent: GraphInstallIntent;
  settings?: Maybe<GraphMobileAppAssignmentSettingsInput>;
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};

export enum GraphInstallIntent {
  available = 'available',
  required = 'required',
  uninstall = 'uninstall',
  availableWithoutEnrollment = 'availableWithoutEnrollment'
}

export type GraphMobileAppAssignmentSettingsInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDeviceAndAppManagementAssignmentTargetInput = {
  rest?: Maybe<Scalars['JSON']>;
};







export type GraphManagedEBookInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  informationUrl?: Maybe<Scalars['String']>;
  largeCover?: Maybe<GraphMimeContentInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  privacyInformationUrl?: Maybe<Scalars['String']>;
  publishedDateTime: Scalars['DateTime'];
  publisher?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphManagedEBookAssignmentInput = {
  installIntent: GraphInstallIntent;
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};


export type GraphManagedDeviceMobileAppConfigurationInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  targetedMobileApps?: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphManagedDeviceMobileAppConfigurationAssignmentInput = {
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};


export type GraphDeviceAppManagementInput = {
  isEnabledForMicrosoftStoreForBusiness: Scalars['Boolean'];
  microsoftStoreForBusinessLanguage?: Maybe<Scalars['String']>;
  microsoftStoreForBusinessLastCompletedApplicationSyncTime: Scalars['DateTime'];
  microsoftStoreForBusinessLastSuccessfulSyncDateTime: Scalars['DateTime'];
  id: Scalars['String'];
};





export enum GraphVppTokenSyncStatus {
  none = 'none',
  inProgress = 'inProgress',
  completed = 'completed',
  failed = 'failed'
}

export enum GraphVppTokenState {
  unknown = 'unknown',
  valid = 'valid',
  expired = 'expired',
  invalid = 'invalid',
  assignedToExternalMDM = 'assignedToExternalMDM'
}

export enum GraphVppTokenAccountType {
  business = 'business',
  education = 'education'
}

export type GraphVppTokenInput = {
  appleId?: Maybe<Scalars['String']>;
  automaticallyUpdateApps: Scalars['Boolean'];
  countryOrRegion?: Maybe<Scalars['String']>;
  expirationDateTime: Scalars['DateTime'];
  lastModifiedDateTime: Scalars['DateTime'];
  lastSyncDateTime: Scalars['DateTime'];
  lastSyncStatus: GraphVppTokenSyncStatus;
  organizationName?: Maybe<Scalars['String']>;
  state: GraphVppTokenState;
  token?: Maybe<Scalars['String']>;
  vppTokenAccountType: GraphVppTokenAccountType;
  id: Scalars['String'];
};




export enum GraphManagedAppDataStorageLocation {
  oneDriveForBusiness = 'oneDriveForBusiness',
  sharePoint = 'sharePoint',
  localStorage = 'localStorage'
}

export enum GraphManagedAppDataTransferLevel {
  allApps = 'allApps',
  managedApps = 'managedApps',
  none = 'none'
}

export enum GraphManagedAppClipboardSharingLevel {
  allApps = 'allApps',
  managedAppsWithPasteIn = 'managedAppsWithPasteIn',
  managedApps = 'managedApps',
  blocked = 'blocked'
}

export enum GraphManagedBrowserType {
  notConfigured = 'notConfigured',
  microsoftEdge = 'microsoftEdge'
}

export enum GraphManagedAppPinCharacterSet {
  numeric = 'numeric',
  alphanumericAndSymbol = 'alphanumericAndSymbol'
}



export type GraphTargetedManagedAppProtectionInput = {
  isAssigned: Scalars['Boolean'];
  allowedDataStorageLocations: Array<Maybe<GraphManagedAppDataStorageLocation>>;
  allowedInboundDataTransferSources: GraphManagedAppDataTransferLevel;
  allowedOutboundClipboardSharingLevel: GraphManagedAppClipboardSharingLevel;
  allowedOutboundDataTransferDestinations: GraphManagedAppDataTransferLevel;
  contactSyncBlocked: Scalars['Boolean'];
  dataBackupBlocked: Scalars['Boolean'];
  deviceComplianceRequired: Scalars['Boolean'];
  disableAppPinIfDevicePinIsSet: Scalars['Boolean'];
  fingerprintBlocked: Scalars['Boolean'];
  managedBrowser: GraphManagedBrowserType;
  managedBrowserToOpenLinksRequired: Scalars['Boolean'];
  maximumPinRetries: Scalars['Int'];
  minimumPinLength: Scalars['Int'];
  minimumRequiredAppVersion?: Maybe<Scalars['String']>;
  minimumRequiredOsVersion?: Maybe<Scalars['String']>;
  minimumWarningAppVersion?: Maybe<Scalars['String']>;
  minimumWarningOsVersion?: Maybe<Scalars['String']>;
  organizationalCredentialsRequired: Scalars['Boolean'];
  periodBeforePinReset: Scalars['ISO8601Duration'];
  periodOfflineBeforeAccessCheck: Scalars['ISO8601Duration'];
  periodOfflineBeforeWipeIsEnforced: Scalars['ISO8601Duration'];
  periodOnlineBeforeAccessCheck: Scalars['ISO8601Duration'];
  pinCharacterSet: GraphManagedAppPinCharacterSet;
  pinRequired: Scalars['Boolean'];
  printBlocked: Scalars['Boolean'];
  saveAsBlocked: Scalars['Boolean'];
  simplePinBlocked: Scalars['Boolean'];
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphTargetedManagedAppPolicyAssignmentInput = {
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};



export enum GraphManagedAppDataEncryptionType {
  useDeviceSettings = 'useDeviceSettings',
  afterDeviceRestart = 'afterDeviceRestart',
  whenDeviceLockedExceptOpenFiles = 'whenDeviceLockedExceptOpenFiles',
  whenDeviceLocked = 'whenDeviceLocked'
}





export enum GraphWindowsInformationProtectionEnforcementLevel {
  noProtection = 'noProtection',
  encryptAndAuditOnly = 'encryptAndAuditOnly',
  encryptAuditAndPrompt = 'encryptAuditAndPrompt',
  encryptAuditAndBlock = 'encryptAuditAndBlock'
}


export type GraphWindowsInformationProtectionInput = {
  azureRightsManagementServicesAllowed: Scalars['Boolean'];
  dataRecoveryCertificate?: Maybe<GraphWindowsInformationProtectionDataRecoveryCertificateInput>;
  enforcementLevel: GraphWindowsInformationProtectionEnforcementLevel;
  enterpriseDomain?: Maybe<Scalars['String']>;
  enterpriseInternalProxyServers?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  enterpriseIPRanges?: Maybe<Array<Maybe<GraphWindowsInformationProtectionIpRangeCollectionInput>>>;
  enterpriseIPRangesAreAuthoritative: Scalars['Boolean'];
  enterpriseNetworkDomainNames?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  enterpriseProtectedDomainNames?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  enterpriseProxiedDomains?: Maybe<Array<Maybe<GraphWindowsInformationProtectionProxiedDomainCollectionInput>>>;
  enterpriseProxyServers?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  enterpriseProxyServersAreAuthoritative: Scalars['Boolean'];
  exemptApps?: Maybe<Array<Maybe<GraphWindowsInformationProtectionAppInput>>>;
  iconsVisible: Scalars['Boolean'];
  indexingEncryptedStoresOrItemsBlocked: Scalars['Boolean'];
  isAssigned: Scalars['Boolean'];
  neutralDomainResources?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  protectedApps?: Maybe<Array<Maybe<GraphWindowsInformationProtectionAppInput>>>;
  protectionUnderLockConfigRequired: Scalars['Boolean'];
  revokeOnUnenrollDisabled: Scalars['Boolean'];
  rightsManagementServicesTemplateId?: Maybe<Scalars['GUID']>;
  smbAutoEncryptedFileExtensions?: Maybe<Array<Maybe<GraphWindowsInformationProtectionResourceCollectionInput>>>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphWindowsInformationProtectionDataRecoveryCertificateInput = {
  certificate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expirationDateTime: Scalars['DateTime'];
  subjectName?: Maybe<Scalars['String']>;
};

export type GraphWindowsInformationProtectionResourceCollectionInput = {
  displayName: Scalars['String'];
  resources?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GraphWindowsInformationProtectionIpRangeCollectionInput = {
  displayName: Scalars['String'];
  ranges: Array<Maybe<GraphIpRangeInput>>;
};

export type GraphIpRangeInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphWindowsInformationProtectionProxiedDomainCollectionInput = {
  displayName: Scalars['String'];
  proxiedDomains: Array<Maybe<GraphProxiedDomainInput>>;
};

export type GraphProxiedDomainInput = {
  ipAddressOrFQDN: Scalars['String'];
  proxy?: Maybe<Scalars['String']>;
};

export type GraphWindowsInformationProtectionAppInput = {
  denied: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  productName?: Maybe<Scalars['String']>;
  publisherName?: Maybe<Scalars['String']>;
};





export type GraphTargetedManagedAppConfigurationInput = {
  deployedAppCount: Scalars['Int'];
  isAssigned: Scalars['Boolean'];
  customSettings: Array<Maybe<GraphKeyValuePairInput>>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphKeyValuePairInput = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export enum GraphWindowsInformationProtectionPinCharacterRequirements {
  notAllow = 'notAllow',
  requireAtLeastOne = 'requireAtLeastOne',
  allow = 'allow'
}








export enum GraphManagedAppAvailability {
  global = 'global',
  lineOfBusiness = 'lineOfBusiness'
}








export enum GraphComplianceStatus {
  unknown = 'unknown',
  notApplicable = 'notApplicable',
  compliant = 'compliant',
  remediated = 'remediated',
  nonCompliant = 'nonCompliant',
  error = 'error',
  conflict = 'conflict',
  notAssigned = 'notAssigned'
}








export enum GraphMicrosoftStoreForBusinessLicenseType {
  offline = 'offline',
  online = 'online'
}




export enum GraphMobileAppContentFileUploadState {
  success = 'success',
  transientError = 'transientError',
  error = 'error',
  unknown = 'unknown',
  azureStorageUriRequestSuccess = 'azureStorageUriRequestSuccess',
  azureStorageUriRequestPending = 'azureStorageUriRequestPending',
  azureStorageUriRequestFailed = 'azureStorageUriRequestFailed',
  azureStorageUriRequestTimedOut = 'azureStorageUriRequestTimedOut',
  azureStorageUriRenewalSuccess = 'azureStorageUriRenewalSuccess',
  azureStorageUriRenewalPending = 'azureStorageUriRenewalPending',
  azureStorageUriRenewalFailed = 'azureStorageUriRenewalFailed',
  azureStorageUriRenewalTimedOut = 'azureStorageUriRenewalTimedOut',
  commitFileSuccess = 'commitFileSuccess',
  commitFilePending = 'commitFilePending',
  commitFileFailed = 'commitFileFailed',
  commitFileTimedOut = 'commitFileTimedOut'
}

export type GraphMobileAppContentFileInput = {
  azureStorageUri?: Maybe<Scalars['String']>;
  azureStorageUriExpirationDateTime?: Maybe<Scalars['DateTime']>;
  createdDateTime: Scalars['DateTime'];
  isCommitted: Scalars['Boolean'];
  manifest?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size: Scalars['BigInt'];
  sizeEncrypted: Scalars['BigInt'];
  uploadState: GraphMobileAppContentFileUploadState;
  id: Scalars['String'];
};

export type GraphFileEncryptionInfoInput = {
  encryptionKey?: Maybe<Scalars['String']>;
  fileDigest?: Maybe<Scalars['String']>;
  fileDigestAlgorithm?: Maybe<Scalars['String']>;
  initializationVector?: Maybe<Scalars['String']>;
  mac?: Maybe<Scalars['String']>;
  macKey?: Maybe<Scalars['String']>;
  profileIdentifier?: Maybe<Scalars['String']>;
};



export enum GraphWindowsArchitecture {
  none = 'none',
  x86 = 'x86',
  x64 = 'x64',
  arm = 'arm',
  neutral = 'neutral'
}


export enum GraphWin32LobAppRuleType {
  detection = 'detection',
  requirement = 'requirement'
}



export enum GraphWindowsDeviceType {
  none = 'none',
  desktop = 'desktop',
  mobile = 'mobile',
  holographic = 'holographic',
  team = 'team'
}


export enum GraphInstallState {
  notApplicable = 'notApplicable',
  installed = 'installed',
  failed = 'failed',
  notInstalled = 'notInstalled',
  uninstallFailed = 'uninstallFailed',
  unknown = 'unknown'
}






export enum GraphDeviceManagementSubscriptionState {
  pending = 'pending',
  active = 'active',
  warning = 'warning',
  disabled = 'disabled',
  deleted = 'deleted',
  blocked = 'blocked',
  lockedOut = 'lockedOut'
}


export type GraphDeviceCompliancePolicyInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphDeviceCompliancePolicyAssignmentInput = {
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};

export type GraphDeviceComplianceScheduledActionForRuleInput = {
  ruleName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type GraphDeviceConfigurationInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  version: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphDeviceConfigurationAssignmentInput = {
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};


export type GraphDeviceEnrollmentConfigurationInput = {
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  lastModifiedDateTime: Scalars['DateTime'];
  priority: Scalars['Int'];
  version: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphEnrollmentConfigurationAssignmentInput = {
  target?: Maybe<GraphDeviceAndAppManagementAssignmentTargetInput>;
  id: Scalars['String'];
};





export enum GraphPolicyPlatformType {
  android = 'android',
  iOS = 'iOS',
  macOS = 'macOS',
  windowsPhone81 = 'windowsPhone81',
  windows81AndLater = 'windows81AndLater',
  windows10AndLater = 'windows10AndLater',
  androidWorkProfile = 'androidWorkProfile',
  all = 'all'
}




export enum GraphIosUpdatesInstallStatus {
  deviceOsHigherThanDesiredOsVersion = 'deviceOsHigherThanDesiredOsVersion',
  sharedDeviceUserLoggedInError = 'sharedDeviceUserLoggedInError',
  notSupportedOperation = 'notSupportedOperation',
  installFailed = 'installFailed',
  installPhoneCallInProgress = 'installPhoneCallInProgress',
  installInsufficientPower = 'installInsufficientPower',
  installInsufficientSpace = 'installInsufficientSpace',
  installing = 'installing',
  downloadInsufficientNetwork = 'downloadInsufficientNetwork',
  downloadInsufficientPower = 'downloadInsufficientPower',
  downloadInsufficientSpace = 'downloadInsufficientSpace',
  downloadRequiresComputer = 'downloadRequiresComputer',
  downloadFailed = 'downloadFailed',
  downloading = 'downloading',
  success = 'success',
  available = 'available',
  idle = 'idle',
  unknown = 'unknown'
}



export enum GraphDeviceManagementPartnerTenantState {
  unknown = 'unknown',
  unavailable = 'unavailable',
  enabled = 'enabled',
  terminated = 'terminated',
  rejected = 'rejected',
  unresponsive = 'unresponsive'
}





export enum GraphDeviceManagementPartnerAppType {
  unknown = 'unknown',
  singleTenantApp = 'singleTenantApp',
  multiTenantApp = 'multiTenantApp'
}


export enum GraphDeviceManagementExchangeConnectorType {
  onPremises = 'onPremises',
  hosted = 'hosted',
  serviceToService = 'serviceToService',
  dedicated = 'dedicated'
}

export enum GraphDeviceManagementExchangeConnectorStatus {
  none = 'none',
  connectionPending = 'connectionPending',
  connected = 'connected',
  disconnected = 'disconnected'
}

export type GraphDeviceManagementExchangeConnectorInput = {
  connectorServerName?: Maybe<Scalars['String']>;
  exchangeAlias?: Maybe<Scalars['String']>;
  exchangeConnectorType: GraphDeviceManagementExchangeConnectorType;
  exchangeOrganization?: Maybe<Scalars['String']>;
  lastSyncDateTime: Scalars['DateTime'];
  primarySmtpAddress?: Maybe<Scalars['String']>;
  serverName?: Maybe<Scalars['String']>;
  status: GraphDeviceManagementExchangeConnectorStatus;
  version?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export enum GraphDeviceManagementExchangeConnectorSyncType {
  fullSync = 'fullSync',
  deltaSync = 'deltaSync'
}


export enum GraphMobileThreatPartnerTenantState {
  unavailable = 'unavailable',
  available = 'available',
  enabled = 'enabled',
  unresponsive = 'unresponsive'
}





export enum GraphNotificationTemplateBrandingOptions {
  none = 'none',
  includeCompanyLogo = 'includeCompanyLogo',
  includeCompanyName = 'includeCompanyName',
  includeContactInformation = 'includeContactInformation'
}

export type GraphNotificationMessageTemplateInput = {
  brandingOptions: GraphNotificationTemplateBrandingOptions;
  defaultLocale?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  lastModifiedDateTime: Scalars['DateTime'];
  id: Scalars['String'];
};






export enum GraphRemoteAssistanceOnboardingStatus {
  notOnboarded = 'notOnboarded',
  onboarding = 'onboarding',
  onboarded = 'onboarded'
}

export type GraphRemoteAssistancePartnerInput = {
  displayName?: Maybe<Scalars['String']>;
  lastConnectionDateTime: Scalars['DateTime'];
  onboardingStatus: GraphRemoteAssistanceOnboardingStatus;
  onboardingUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};



export enum GraphApplicationType {
  universal = 'universal',
  desktop = 'desktop'
}





export enum GraphDeviceThreatProtectionLevel {
  unavailable = 'unavailable',
  secured = 'secured',
  low = 'low',
  medium = 'medium',
  high = 'high',
  notSet = 'notSet'
}

export enum GraphAndroidRequiredPasswordType {
  deviceDefault = 'deviceDefault',
  alphabetic = 'alphabetic',
  alphanumeric = 'alphanumeric',
  alphanumericWithSymbols = 'alphanumericWithSymbols',
  lowSecurityBiometric = 'lowSecurityBiometric',
  numeric = 'numeric',
  numericComplex = 'numericComplex',
  any = 'any'
}




export enum GraphAppListType {
  none = 'none',
  appsInListCompliant = 'appsInListCompliant',
  appsNotInListCompliant = 'appsNotInListCompliant'
}

export enum GraphWebBrowserCookieSettings {
  browserDefault = 'browserDefault',
  blockAlways = 'blockAlways',
  allowCurrentWebSite = 'allowCurrentWebSite',
  allowFromWebsitesVisited = 'allowFromWebsitesVisited',
  allowAlways = 'allowAlways'
}




export enum GraphAndroidWorkProfileRequiredPasswordType {
  deviceDefault = 'deviceDefault',
  lowSecurityBiometric = 'lowSecurityBiometric',
  required = 'required',
  atLeastNumeric = 'atLeastNumeric',
  numericComplex = 'numericComplex',
  atLeastAlphabetic = 'atLeastAlphabetic',
  atLeastAlphanumeric = 'atLeastAlphanumeric',
  alphanumericWithSymbols = 'alphanumericWithSymbols'
}

export enum GraphAndroidWorkProfileCrossProfileDataSharingType {
  deviceDefault = 'deviceDefault',
  preventAny = 'preventAny',
  allowPersonalToWork = 'allowPersonalToWork',
  noRestrictions = 'noRestrictions'
}

export enum GraphAndroidWorkProfileDefaultAppPermissionPolicyType {
  deviceDefault = 'deviceDefault',
  prompt = 'prompt',
  autoGrant = 'autoGrant',
  autoDeny = 'autoDeny'
}




export enum GraphDeviceComplianceActionType {
  noAction = 'noAction',
  notification = 'notification',
  block = 'block',
  retire = 'retire',
  wipe = 'wipe',
  removeResourceAccessProfiles = 'removeResourceAccessProfiles',
  pushNotification = 'pushNotification'
}

















export enum GraphEditionUpgradeLicenseType {
  productKey = 'productKey',
  licenseFile = 'licenseFile'
}

export enum GraphWindows10EditionType {
  windows10Enterprise = 'windows10Enterprise',
  windows10EnterpriseN = 'windows10EnterpriseN',
  windows10Education = 'windows10Education',
  windows10EducationN = 'windows10EducationN',
  windows10MobileEnterprise = 'windows10MobileEnterprise',
  windows10HolographicEnterprise = 'windows10HolographicEnterprise',
  windows10Professional = 'windows10Professional',
  windows10ProfessionalN = 'windows10ProfessionalN',
  windows10ProfessionalEducation = 'windows10ProfessionalEducation',
  windows10ProfessionalEducationN = 'windows10ProfessionalEducationN',
  windows10ProfessionalWorkstation = 'windows10ProfessionalWorkstation',
  windows10ProfessionalWorkstationN = 'windows10ProfessionalWorkstationN'
}




export enum GraphRequiredPasswordType {
  deviceDefault = 'deviceDefault',
  alphanumeric = 'alphanumeric',
  numeric = 'numeric'
}





export enum GraphRatingAppsType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  agesAbove4 = 'agesAbove4',
  agesAbove9 = 'agesAbove9',
  agesAbove12 = 'agesAbove12',
  agesAbove17 = 'agesAbove17'
}








export enum GraphSharedPcAllowedAccountType {
  guest = 'guest',
  domain = 'domain'
}




export enum GraphApplicationGuardBlockClipboardSharingType {
  notConfigured = 'notConfigured',
  blockBoth = 'blockBoth',
  blockHostToContainer = 'blockHostToContainer',
  blockContainerToHost = 'blockContainerToHost',
  blockNone = 'blockNone'
}

export enum GraphApplicationGuardBlockFileTransferType {
  notConfigured = 'notConfigured',
  blockImageAndTextFile = 'blockImageAndTextFile',
  blockImageFile = 'blockImageFile',
  blockNone = 'blockNone',
  blockTextFile = 'blockTextFile'
}

export enum GraphAppLockerApplicationControlType {
  notConfigured = 'notConfigured',
  enforceComponentsAndStoreApps = 'enforceComponentsAndStoreApps',
  auditComponentsAndStoreApps = 'auditComponentsAndStoreApps',
  enforceComponentsStoreAppsAndSmartlocker = 'enforceComponentsStoreAppsAndSmartlocker',
  auditComponentsStoreAppsAndSmartlocker = 'auditComponentsStoreAppsAndSmartlocker'
}

export enum GraphFirewallCertificateRevocationListCheckMethodType {
  deviceDefault = 'deviceDefault',
  none = 'none',
  attempt = 'attempt',
  require = 'require'
}

export enum GraphFirewallPacketQueueingMethodType {
  deviceDefault = 'deviceDefault',
  disabled = 'disabled',
  queueInbound = 'queueInbound',
  queueOutbound = 'queueOutbound',
  queueBoth = 'queueBoth'
}

export enum GraphFirewallPreSharedKeyEncodingMethodType {
  deviceDefault = 'deviceDefault',
  none = 'none',
  utF8 = 'utF8'
}



export enum GraphStateManagementSetting {
  notConfigured = 'notConfigured',
  blocked = 'blocked',
  allowed = 'allowed'
}

export enum GraphDefenderCloudBlockLevelType {
  notConfigured = 'notConfigured',
  high = 'high',
  highPlus = 'highPlus',
  zeroTolerance = 'zeroTolerance'
}

export enum GraphDefenderMonitorFileActivity {
  userDefined = 'userDefined',
  disable = 'disable',
  monitorAllFiles = 'monitorAllFiles',
  monitorIncomingFilesOnly = 'monitorIncomingFilesOnly',
  monitorOutgoingFilesOnly = 'monitorOutgoingFilesOnly'
}

export enum GraphDefenderPromptForSampleSubmission {
  userDefined = 'userDefined',
  alwaysPrompt = 'alwaysPrompt',
  promptBeforeSendingPersonalData = 'promptBeforeSendingPersonalData',
  neverSendData = 'neverSendData',
  sendAllDataWithoutPrompting = 'sendAllDataWithoutPrompting'
}

export enum GraphDefenderScanType {
  userDefined = 'userDefined',
  disabled = 'disabled',
  quick = 'quick',
  full = 'full'
}

export enum GraphWeeklySchedule {
  userDefined = 'userDefined',
  everyday = 'everyday',
  sunday = 'sunday',
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday'
}

export enum GraphDiagnosticDataSubmissionMode {
  userDefined = 'userDefined',
  none = 'none',
  basic = 'basic',
  enhanced = 'enhanced',
  full = 'full'
}

export enum GraphEdgeCookiePolicy {
  userDefined = 'userDefined',
  allow = 'allow',
  blockThirdParty = 'blockThirdParty',
  blockAll = 'blockAll'
}


export enum GraphSafeSearchFilterType {
  userDefined = 'userDefined',
  strict = 'strict',
  moderate = 'moderate'
}

export enum GraphWindowsStartMenuAppListVisibilityType {
  userDefined = 'userDefined',
  collapse = 'collapse',
  remove = 'remove',
  disableSettingsApp = 'disableSettingsApp'
}

export enum GraphWindowsStartMenuModeType {
  userDefined = 'userDefined',
  fullScreen = 'fullScreen',
  nonFullScreen = 'nonFullScreen'
}

export enum GraphVisibilitySetting {
  notConfigured = 'notConfigured',
  hide = 'hide',
  show = 'show'
}

export enum GraphWindowsSpotlightEnablementSettings {
  notConfigured = 'notConfigured',
  disabled = 'disabled',
  enabled = 'enabled'
}




export enum GraphMiracastChannel {
  userDefined = 'userDefined',
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
  eight = 'eight',
  nine = 'nine',
  ten = 'ten',
  eleven = 'eleven',
  thirtySix = 'thirtySix',
  forty = 'forty',
  fortyFour = 'fortyFour',
  fortyEight = 'fortyEight',
  oneHundredFortyNine = 'oneHundredFortyNine',
  oneHundredFiftyThree = 'oneHundredFiftyThree',
  oneHundredFiftySeven = 'oneHundredFiftySeven',
  oneHundredSixtyOne = 'oneHundredSixtyOne',
  oneHundredSixtyFive = 'oneHundredSixtyFive'
}

export enum GraphWelcomeScreenMeetingInformation {
  userDefined = 'userDefined',
  showOrganizerAndTimeOnly = 'showOrganizerAndTimeOnly',
  showOrganizerAndTimeAndSubject = 'showOrganizerAndTimeAndSubject'
}



export enum GraphInternetSiteSecurityLevel {
  userDefined = 'userDefined',
  medium = 'medium',
  mediumHigh = 'mediumHigh',
  high = 'high'
}

export enum GraphSiteSecurityLevel {
  userDefined = 'userDefined',
  low = 'low',
  mediumLow = 'mediumLow',
  medium = 'medium',
  mediumHigh = 'mediumHigh',
  high = 'high'
}

export enum GraphWindowsUserAccountControlSettings {
  userDefined = 'userDefined',
  alwaysNotify = 'alwaysNotify',
  notifyOnAppChanges = 'notifyOnAppChanges',
  notifyOnAppChangesWithoutDimming = 'notifyOnAppChangesWithoutDimming',
  neverNotify = 'neverNotify'
}






export enum GraphAutomaticUpdateMode {
  userDefined = 'userDefined',
  notifyDownload = 'notifyDownload',
  autoInstallAtMaintenanceTime = 'autoInstallAtMaintenanceTime',
  autoInstallAndRebootAtMaintenanceTime = 'autoInstallAndRebootAtMaintenanceTime',
  autoInstallAndRebootAtScheduledTime = 'autoInstallAndRebootAtScheduledTime',
  autoInstallAndRebootWithoutEndUserControl = 'autoInstallAndRebootWithoutEndUserControl'
}

export enum GraphWindowsUpdateType {
  userDefined = 'userDefined',
  all = 'all',
  businessReadyOnly = 'businessReadyOnly',
  windowsInsiderBuildFast = 'windowsInsiderBuildFast',
  windowsInsiderBuildSlow = 'windowsInsiderBuildSlow',
  windowsInsiderBuildRelease = 'windowsInsiderBuildRelease'
}

export enum GraphWindowsDeliveryOptimizationMode {
  userDefined = 'userDefined',
  httpOnly = 'httpOnly',
  httpWithPeeringNat = 'httpWithPeeringNat',
  httpWithPeeringPrivateGroup = 'httpWithPeeringPrivateGroup',
  httpWithInternetPeering = 'httpWithInternetPeering',
  simpleDownload = 'simpleDownload',
  bypassMode = 'bypassMode'
}


export enum GraphPrereleaseFeatures {
  userDefined = 'userDefined',
  settingsOnly = 'settingsOnly',
  settingsAndExperimentations = 'settingsAndExperimentations',
  notAllowed = 'notAllowed'
}





export enum GraphEnablement {
  notConfigured = 'notConfigured',
  enabled = 'enabled',
  disabled = 'disabled'
}

export enum GraphWindowsHelloForBusinessPinUsage {
  allowed = 'allowed',
  required = 'required',
  disallowed = 'disallowed'
}











export type GraphSearchEntityInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphSearchRequestInput = {
  contentSources?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableTopResults?: Maybe<Scalars['Boolean']>;
  entityTypes?: Maybe<Array<Maybe<GraphEntityType>>>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  from: Scalars['Int'];
  query: GraphSearchQueryInput;
  size: Scalars['Int'];
};

export enum GraphEntityType {
  event = 'event',
  message = 'message',
  driveItem = 'driveItem',
  externalItem = 'externalItem',
  site = 'site',
  list = 'list',
  listItem = 'listItem',
  drive = 'drive',
  unknownfuturevalue = 'unknownfuturevalue'
}

export type GraphSearchQueryInput = {
  queryString: Scalars['String'];
};





export enum GraphPlannerPreviewType {
  automatic = 'automatic',
  noPreview = 'noPreview',
  checklist = 'checklist',
  description = 'description',
  reference = 'reference'
}



















export enum GraphOnenoteUserRole {
  None = 'None',
  Owner = 'Owner',
  Contributor = 'Contributor',
  Reader = 'Reader'
}

export type GraphNotebookInput = {
  isDefault?: Maybe<Scalars['Boolean']>;
  isShared?: Maybe<Scalars['Boolean']>;
  links?: Maybe<GraphNotebookLinksInput>;
  sectionGroupsUrl?: Maybe<Scalars['String']>;
  sectionsUrl?: Maybe<Scalars['String']>;
  userRole?: Maybe<GraphOnenoteUserRole>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  displayName?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  self?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphNotebookLinksInput = {
  oneNoteClientUrl?: Maybe<GraphExternalLinkInput>;
  oneNoteWebUrl?: Maybe<GraphExternalLinkInput>;
};

export type GraphExternalLinkInput = {
  href?: Maybe<Scalars['String']>;
};



export type GraphOnenoteSectionInput = {
  isDefault?: Maybe<Scalars['Boolean']>;
  links?: Maybe<GraphSectionLinksInput>;
  pagesUrl?: Maybe<Scalars['String']>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  displayName?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  self?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphSectionLinksInput = {
  oneNoteClientUrl?: Maybe<GraphExternalLinkInput>;
  oneNoteWebUrl?: Maybe<GraphExternalLinkInput>;
};


export enum GraphOperationStatus {
  NotStarted = 'NotStarted',
  Running = 'Running',
  Completed = 'Completed',
  Failed = 'Failed'
}



export type GraphOnenotePageInput = {
  content?: Maybe<Scalars['String']>;
  contentUrl?: Maybe<Scalars['String']>;
  createdByAppId?: Maybe<Scalars['String']>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  level?: Maybe<Scalars['Int']>;
  links?: Maybe<GraphPageLinksInput>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  self?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphPageLinksInput = {
  oneNoteClientUrl?: Maybe<GraphExternalLinkInput>;
  oneNoteWebUrl?: Maybe<GraphExternalLinkInput>;
};

export type GraphOnenotePatchContentCommandInput = {
  action: GraphOnenotePatchActionType;
  content?: Maybe<Scalars['String']>;
  position?: Maybe<GraphOnenotePatchInsertPosition>;
  target: Scalars['String'];
};

export enum GraphOnenotePatchActionType {
  Replace = 'Replace',
  Append = 'Append',
  Delete = 'Delete',
  Insert = 'Insert',
  Prepend = 'Prepend'
}

export enum GraphOnenotePatchInsertPosition {
  After = 'After',
  Before = 'Before'
}




export enum GraphDataPolicyOperationStatus {
  notStarted = 'notStarted',
  running = 'running',
  complete = 'complete',
  failed = 'failed',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphAlertFeedback {
  unknown = 'unknown',
  truePositive = 'truePositive',
  falsePositive = 'falsePositive',
  benignPositive = 'benignPositive',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphAlertSeverity {
  unknown = 'unknown',
  informational = 'informational',
  low = 'low',
  medium = 'medium',
  high = 'high',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphAlertStatus {
  unknown = 'unknown',
  newAlert = 'newAlert',
  inProgress = 'inProgress',
  resolved = 'resolved',
  dismissed = 'dismissed',
  unknownFutureValue = 'unknownFutureValue'
}






export type GraphParticipantInput = {
  info: GraphParticipantInfoInput;
  isInLobby: Scalars['Boolean'];
  isMuted: Scalars['Boolean'];
  mediaStreams?: Maybe<Array<Maybe<GraphMediaStreamInput>>>;
  recordingInfo?: Maybe<GraphRecordingInfoInput>;
  id: Scalars['String'];
};

export type GraphMediaStreamInput = {
  direction: GraphMediaDirection;
  label?: Maybe<Scalars['String']>;
  mediaType: GraphModality;
  serverMuted: Scalars['Boolean'];
  sourceId: Scalars['String'];
};

export enum GraphMediaDirection {
  inactive = 'inactive',
  sendOnly = 'sendOnly',
  receiveOnly = 'receiveOnly',
  sendReceive = 'sendReceive'
}

export type GraphRecordingInfoInput = {
  initiator?: Maybe<GraphIdentitySetInput>;
  recordingStatus: GraphRecordingStatus;
};





export enum GraphTeamsAppDistributionMethod {
  store = 'store',
  organization = 'organization',
  sideloaded = 'sideloaded',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphChannelMembershipType {
  standard = 'standard',
  private = 'private',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphChatMessageImportance {
  normal = 'normal',
  high = 'high',
  urgent = 'urgent',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphChatMessageType {
  message = 'message',
  chatEvent = 'chatEvent',
  typing = 'typing',
  unknownFutureValue = 'unknownFutureValue'
}






export enum GraphScheduleChangeRequestActor {
  sender = 'sender',
  recipient = 'recipient',
  manager = 'manager',
  system = 'system',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphScheduleChangeState {
  pending = 'pending',
  approved = 'approved',
  declined = 'declined',
  unknownFutureValue = 'unknownFutureValue'
}

export type GraphScheduleChangeRequestInput = {
  assignedTo?: Maybe<GraphScheduleChangeRequestActor>;
  managerActionDateTime?: Maybe<Scalars['DateTime']>;
  managerActionMessage?: Maybe<Scalars['String']>;
  managerUserId?: Maybe<Scalars['String']>;
  senderDateTime?: Maybe<Scalars['DateTime']>;
  senderMessage?: Maybe<Scalars['String']>;
  senderUserId?: Maybe<Scalars['String']>;
  state?: Maybe<GraphScheduleChangeState>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphScheduleInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  offerShiftRequestsEnabled?: Maybe<Scalars['Boolean']>;
  openShiftsEnabled?: Maybe<Scalars['Boolean']>;
  provisionStatus?: Maybe<GraphOperationStatus>;
  provisionStatusCode?: Maybe<Scalars['String']>;
  swapShiftsRequestsEnabled?: Maybe<Scalars['Boolean']>;
  timeClockEnabled?: Maybe<Scalars['Boolean']>;
  timeOffRequestsEnabled?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  workforceIntegrationIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
};


export type GraphTeamsAppInstallationInput = {
  id: Scalars['String'];
};


export enum GraphTeamsAsyncOperationType {
  invalid = 'invalid',
  cloneTeam = 'cloneTeam',
  archiveTeam = 'archiveTeam',
  unarchiveTeam = 'unarchiveTeam',
  createTeam = 'createTeam',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphTeamsAsyncOperationStatus {
  invalid = 'invalid',
  notStarted = 'notStarted',
  inProgress = 'inProgress',
  succeeded = 'succeeded',
  failed = 'failed',
  unknownFutureValue = 'unknownFutureValue'
}





export enum GraphWorkforceIntegrationSupportedEntities {
  none = 'none',
  shift = 'shift',
  swapRequest = 'swapRequest',
  userShiftPreferences = 'userShiftPreferences',
  openShift = 'openShift',
  openShiftRequest = 'openShiftRequest',
  offerShiftRequest = 'offerShiftRequest',
  unknownFutureValue = 'unknownFutureValue'
}











export enum GraphTimeOffReasonIconType {
  none = 'none',
  car = 'car',
  calendar = 'calendar',
  running = 'running',
  plane = 'plane',
  firstAid = 'firstAid',
  doctor = 'doctor',
  notWorking = 'notWorking',
  clock = 'clock',
  juryDuty = 'juryDuty',
  globe = 'globe',
  cup = 'cup',
  phone = 'phone',
  weather = 'weather',
  umbrella = 'umbrella',
  piggyBank = 'piggyBank',
  dog = 'dog',
  cake = 'cake',
  trafficCone = 'trafficCone',
  pin = 'pin',
  sunny = 'sunny',
  unknownFutureValue = 'unknownFutureValue'
}





export enum GraphThreatCategory {
  undefined = 'undefined',
  spam = 'spam',
  phishing = 'phishing',
  malware = 'malware',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphThreatAssessmentContentType {
  mail = 'mail',
  url = 'url',
  file = 'file'
}

export enum GraphThreatExpectedAssessment {
  block = 'block',
  unblock = 'unblock'
}

export enum GraphThreatAssessmentRequestSource {
  undefined = 'undefined',
  user = 'user',
  administrator = 'administrator'
}

export enum GraphThreatAssessmentStatus {
  pending = 'pending',
  completed = 'completed'
}


export enum GraphMailDestinationRoutingReason {
  none = 'none',
  mailFlowRule = 'mailFlowRule',
  safeSender = 'safeSender',
  blockedSender = 'blockedSender',
  advancedSpamFiltering = 'advancedSpamFiltering',
  domainAllowList = 'domainAllowList',
  domainBlockList = 'domainBlockList',
  notInAddressBook = 'notInAddressBook',
  firstTimeSender = 'firstTimeSender',
  autoPurgeToInbox = 'autoPurgeToInbox',
  autoPurgeToJunk = 'autoPurgeToJunk',
  autoPurgeToDeleted = 'autoPurgeToDeleted',
  outbound = 'outbound',
  notJunk = 'notJunk',
  junk = 'junk',
  unknownFutureValue = 'unknownFutureValue'
}





export enum GraphThreatAssessmentResultType {
  checkPolicy = 'checkPolicy',
  rescan = 'rescan',
  unknownFutureValue = 'unknownFutureValue'
}




export enum GraphWellknownListName {
  none = 'none',
  defaultList = 'defaultList',
  flaggedEmails = 'flaggedEmails',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphTaskStatus {
  notStarted = 'notStarted',
  inProgress = 'inProgress',
  completed = 'completed',
  waitingOnOthers = 'waitingOnOthers',
  deferred = 'deferred'
}



export enum GraphAppliedConditionalAccessPolicyResult {
  success = 'success',
  failure = 'failure',
  notApplied = 'notApplied',
  notEnabled = 'notEnabled',
  unknown = 'unknown',
  unknownFutureValue = 'unknownFutureValue'
}










export enum GraphGroupType {
  unifiedGroups = 'unifiedGroups',
  azureAD = 'azureAD',
  unknownFutureValue = 'unknownFutureValue'
}




















































export enum GraphEducationGender {
  female = 'female',
  male = 'male',
  other = 'other',
  unknownFutureValue = 'unknownFutureValue'
}



















































export enum GraphMessageActionFlag {
  any = 'any',
  call = 'call',
  doNotForward = 'doNotForward',
  followUp = 'followUp',
  fyi = 'fyi',
  forward = 'forward',
  noResponseNecessary = 'noResponseNecessary',
  read = 'read',
  reply = 'reply',
  replyToAll = 'replyToAll',
  review = 'review'
}









export enum GraphSelectionLikelihoodInfo {
  notSpecified = 'notSpecified',
  high = 'high'
}



export enum GraphWebsiteType {
  other = 'other',
  home = 'home',
  work = 'work',
  blog = 'blog',
  profile = 'profile'
}

























export enum GraphCloudAppSecuritySessionControlType {
  mcasConfigured = 'mcasConfigured',
  monitorOnly = 'monitorOnly',
  blockDownloads = 'blockDownloads',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphConditionalAccessClientApp {
  all = 'all',
  browser = 'browser',
  mobileAppsAndDesktopClients = 'mobileAppsAndDesktopClients',
  exchangeActiveSync = 'exchangeActiveSync',
  easSupported = 'easSupported',
  other = 'other',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphConditionalAccessDevicePlatform {
  android = 'android',
  iOS = 'iOS',
  windows = 'windows',
  windowsPhone = 'windowsPhone',
  macOS = 'macOS',
  all = 'all',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphConditionalAccessGrantControl {
  block = 'block',
  mfa = 'mfa',
  compliantDevice = 'compliantDevice',
  domainJoinedDevice = 'domainJoinedDevice',
  approvedApplication = 'approvedApplication',
  compliantApplication = 'compliantApplication',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphPersistentBrowserSessionMode {
  always = 'always',
  never = 'never'
}


export enum GraphSigninFrequencyType {
  days = 'days',
  hours = 'hours'
}









export enum GraphMdmAppConfigKeyType {
  stringType = 'stringType',
  integerType = 'integerType',
  realType = 'realType',
  booleanType = 'booleanType',
  tokenType = 'tokenType'
}













export enum GraphWin32LobAppNotification {
  showAll = 'showAll',
  showReboot = 'showReboot',
  hideAll = 'hideAll'
}




export enum GraphWin32LobAppFileSystemOperationType {
  notConfigured = 'notConfigured',
  exists = 'exists',
  modifiedDate = 'modifiedDate',
  createdDate = 'createdDate',
  version = 'version',
  sizeInMB = 'sizeInMB'
}

export enum GraphWin32LobAppRuleOperator {
  notConfigured = 'notConfigured',
  equal = 'equal',
  notEqual = 'notEqual',
  greaterThan = 'greaterThan',
  greaterThanOrEqual = 'greaterThanOrEqual',
  lessThan = 'lessThan',
  lessThanOrEqual = 'lessThanOrEqual'
}


export enum GraphWin32LobAppRestartBehavior {
  basedOnReturnCode = 'basedOnReturnCode',
  allow = 'allow',
  suppress = 'suppress',
  force = 'force'
}

export enum GraphRunAsAccountType {
  system = 'system',
  user = 'user'
}


export enum GraphWin32LobAppMsiPackageType {
  perMachine = 'perMachine',
  perUser = 'perUser',
  dualPurpose = 'dualPurpose'
}


export enum GraphWin32LobAppPowerShellScriptRuleOperationType {
  notConfigured = 'notConfigured',
  string = 'string',
  dateTime = 'dateTime',
  integer = 'integer',
  float = 'float',
  version = 'version',
  boolean = 'boolean'
}



export enum GraphWin32LobAppRegistryRuleOperationType {
  notConfigured = 'notConfigured',
  exists = 'exists',
  doesNotExist = 'doesNotExist',
  string = 'string',
  integer = 'integer',
  version = 'version'
}


export enum GraphWin32LobAppReturnCodeType {
  failed = 'failed',
  success = 'success',
  softReboot = 'softReboot',
  hardReboot = 'hardReboot',
  retry = 'retry'
}








export enum GraphBitLockerEncryptionMethod {
  aesCbc128 = 'aesCbc128',
  aesCbc256 = 'aesCbc256',
  xtsAes128 = 'xtsAes128',
  xtsAes256 = 'xtsAes256'
}


export enum GraphDefenderThreatAction {
  deviceDefault = 'deviceDefault',
  clean = 'clean',
  quarantine = 'quarantine',
  remove = 'remove',
  allow = 'allow',
  userDefined = 'userDefined',
  block = 'block'
}






export enum GraphEdgeSearchEngineType {
  default = 'default',
  bing = 'bing'
}









export enum GraphIosNotificationAlertType {
  deviceDefault = 'deviceDefault',
  banner = 'banner',
  modal = 'modal',
  none = 'none'
}


export enum GraphRatingAustraliaMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  mature = 'mature',
  agesAbove15 = 'agesAbove15',
  agesAbove18 = 'agesAbove18'
}

export enum GraphRatingAustraliaTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  preschoolers = 'preschoolers',
  children = 'children',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  mature = 'mature',
  agesAbove15 = 'agesAbove15',
  agesAbove15AdultViolence = 'agesAbove15AdultViolence'
}


export enum GraphRatingCanadaMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  agesAbove14 = 'agesAbove14',
  agesAbove18 = 'agesAbove18',
  restricted = 'restricted'
}

export enum GraphRatingCanadaTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  children = 'children',
  childrenAbove8 = 'childrenAbove8',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  agesAbove14 = 'agesAbove14',
  agesAbove18 = 'agesAbove18'
}


export enum GraphRatingFranceMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  agesAbove10 = 'agesAbove10',
  agesAbove12 = 'agesAbove12',
  agesAbove16 = 'agesAbove16',
  agesAbove18 = 'agesAbove18'
}

export enum GraphRatingFranceTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  agesAbove10 = 'agesAbove10',
  agesAbove12 = 'agesAbove12',
  agesAbove16 = 'agesAbove16',
  agesAbove18 = 'agesAbove18'
}


export enum GraphRatingGermanyMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  agesAbove6 = 'agesAbove6',
  agesAbove12 = 'agesAbove12',
  agesAbove16 = 'agesAbove16',
  adults = 'adults'
}

export enum GraphRatingGermanyTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  agesAbove6 = 'agesAbove6',
  agesAbove12 = 'agesAbove12',
  agesAbove16 = 'agesAbove16',
  adults = 'adults'
}


export enum GraphRatingIrelandMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  agesAbove12 = 'agesAbove12',
  agesAbove15 = 'agesAbove15',
  agesAbove16 = 'agesAbove16',
  adults = 'adults'
}

export enum GraphRatingIrelandTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  children = 'children',
  youngAdults = 'youngAdults',
  parentalSupervision = 'parentalSupervision',
  mature = 'mature'
}


export enum GraphRatingJapanMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  agesAbove15 = 'agesAbove15',
  agesAbove18 = 'agesAbove18'
}

export enum GraphRatingJapanTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  explicitAllowed = 'explicitAllowed'
}


export enum GraphRatingNewZealandMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  mature = 'mature',
  agesAbove13 = 'agesAbove13',
  agesAbove15 = 'agesAbove15',
  agesAbove16 = 'agesAbove16',
  agesAbove18 = 'agesAbove18',
  restricted = 'restricted',
  agesAbove16Restricted = 'agesAbove16Restricted'
}

export enum GraphRatingNewZealandTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  adults = 'adults'
}


export enum GraphRatingUnitedKingdomMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  universalChildren = 'universalChildren',
  parentalGuidance = 'parentalGuidance',
  agesAbove12Video = 'agesAbove12Video',
  agesAbove12Cinema = 'agesAbove12Cinema',
  agesAbove15 = 'agesAbove15',
  adults = 'adults'
}

export enum GraphRatingUnitedKingdomTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  caution = 'caution'
}


export enum GraphRatingUnitedStatesMoviesType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  parentalGuidance13 = 'parentalGuidance13',
  restricted = 'restricted',
  adults = 'adults'
}

export enum GraphRatingUnitedStatesTelevisionType {
  allAllowed = 'allAllowed',
  allBlocked = 'allBlocked',
  childrenAll = 'childrenAll',
  childrenAbove7 = 'childrenAbove7',
  general = 'general',
  parentalGuidance = 'parentalGuidance',
  childrenAbove14 = 'childrenAbove14',
  adults = 'adults'
}











export enum GraphSharedPcAccountDeletionPolicyType {
  immediate = 'immediate',
  diskSpaceThreshold = 'diskSpaceThreshold',
  diskSpaceThresholdOrInactiveThreshold = 'diskSpaceThresholdOrInactiveThreshold'
}


















































export enum GraphOnenoteSourceService {
  Unknown = 'Unknown',
  OneDrive = 'OneDrive',
  OneDriveForBusiness = 'OneDriveForBusiness',
  OnPremOneDriveForBusiness = 'OnPremOneDriveForBusiness'
}














export enum GraphFileHashType {
  unknown = 'unknown',
  sha1 = 'sha1',
  sha256 = 'sha256',
  md5 = 'md5',
  authenticodeHash256 = 'authenticodeHash256',
  lsHash = 'lsHash',
  ctph = 'ctph',
  unknownFutureValue = 'unknownFutureValue'
}







export enum GraphConnectionDirection {
  unknown = 'unknown',
  inbound = 'inbound',
  outbound = 'outbound',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphSecurityNetworkProtocol {
  unknown = 'unknown',
  ip = 'ip',
  icmp = 'icmp',
  igmp = 'igmp',
  ggp = 'ggp',
  ipv4 = 'ipv4',
  tcp = 'tcp',
  pup = 'pup',
  udp = 'udp',
  idp = 'idp',
  ipv6 = 'ipv6',
  ipv6RoutingHeader = 'ipv6RoutingHeader',
  ipv6FragmentHeader = 'ipv6FragmentHeader',
  ipSecEncapsulatingSecurityPayload = 'ipSecEncapsulatingSecurityPayload',
  ipSecAuthenticationHeader = 'ipSecAuthenticationHeader',
  icmpV6 = 'icmpV6',
  ipv6NoNextHeader = 'ipv6NoNextHeader',
  ipv6DestinationOptions = 'ipv6DestinationOptions',
  nd = 'nd',
  raw = 'raw',
  ipx = 'ipx',
  spx = 'spx',
  spxII = 'spxII',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphConnectionStatus {
  unknown = 'unknown',
  attempted = 'attempted',
  succeeded = 'succeeded',
  blocked = 'blocked',
  failed = 'failed',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphProcessIntegrityLevel {
  unknown = 'unknown',
  untrusted = 'untrusted',
  low = 'low',
  medium = 'medium',
  high = 'high',
  system = 'system',
  unknownFutureValue = 'unknownFutureValue'
}


export enum GraphRegistryHive {
  unknown = 'unknown',
  currentConfig = 'currentConfig',
  currentUser = 'currentUser',
  localMachineSam = 'localMachineSam',
  localMachineSecurity = 'localMachineSecurity',
  localMachineSoftware = 'localMachineSoftware',
  localMachineSystem = 'localMachineSystem',
  usersDefault = 'usersDefault',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRegistryOperation {
  unknown = 'unknown',
  create = 'create',
  modify = 'modify',
  delete = 'delete',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphRegistryValueType {
  unknown = 'unknown',
  binary = 'binary',
  dword = 'dword',
  dwordLittleEndian = 'dwordLittleEndian',
  dwordBigEndian = 'dwordBigEndian',
  expandSz = 'expandSz',
  link = 'link',
  multiSz = 'multiSz',
  none = 'none',
  qword = 'qword',
  qwordlittleEndian = 'qwordlittleEndian',
  sz = 'sz',
  unknownFutureValue = 'unknownFutureValue'
}



export enum GraphSecurityResourceType {
  unknown = 'unknown',
  attacked = 'attacked',
  related = 'related',
  unknownFutureValue = 'unknownFutureValue'
}




export enum GraphEmailRole {
  unknown = 'unknown',
  sender = 'sender',
  recipient = 'recipient',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphLogonType {
  unknown = 'unknown',
  interactive = 'interactive',
  remoteInteractive = 'remoteInteractive',
  network = 'network',
  batch = 'batch',
  service = 'service',
  unknownFutureValue = 'unknownFutureValue'
}

export enum GraphUserAccountSecurityType {
  unknown = 'unknown',
  standard = 'standard',
  power = 'power',
  administrator = 'administrator',
  unknownFutureValue = 'unknownFutureValue'
}





























export enum GraphChatMessagePolicyViolationDlpActionTypes {
  none = 'none',
  notifySender = 'notifySender',
  blockAccess = 'blockAccess',
  blockAccessExternal = 'blockAccessExternal'
}

export enum GraphChatMessagePolicyViolationUserActionTypes {
  none = 'none',
  override = 'override',
  reportFalsePositive = 'reportFalsePositive'
}

export enum GraphChatMessagePolicyViolationVerdictDetailsTypes {
  none = 'none',
  allowFalsePositiveOverride = 'allowFalsePositiveOverride',
  allowOverrideWithoutJustification = 'allowOverrideWithoutJustification',
  allowOverrideWithJustification = 'allowOverrideWithJustification'
}









export enum GraphScheduleEntityTheme {
  white = 'white',
  blue = 'blue',
  green = 'green',
  purple = 'purple',
  pink = 'pink',
  yellow = 'yellow',
  gray = 'gray',
  darkBlue = 'darkBlue',
  darkGreen = 'darkGreen',
  darkPurple = 'darkPurple',
  darkPink = 'darkPink',
  darkYellow = 'darkYellow',
  unknownFutureValue = 'unknownFutureValue'
}








export enum GraphWorkforceIntegrationEncryptionProtocol {
  sharedSecret = 'sharedSecret',
  unknownFutureValue = 'unknownFutureValue'
}


export enum MicrosoftGraphCallRecordsModality {
  audio = 'audio',
  video = 'video',
  videoBasedScreenSharing = 'videoBasedScreenSharing',
  data = 'data',
  screenSharing = 'screenSharing',
  unknownFutureValue = 'unknownFutureValue'
}

export enum MicrosoftGraphCallRecordsCallType {
  unknown = 'unknown',
  groupCall = 'groupCall',
  peerToPeer = 'peerToPeer',
  unknownFutureValue = 'unknownFutureValue'
}






export enum MicrosoftGraphCallRecordsClientPlatform {
  unknown = 'unknown',
  windows = 'windows',
  macOS = 'macOS',
  iOS = 'iOS',
  android = 'android',
  web = 'web',
  ipPhone = 'ipPhone',
  roomSystem = 'roomSystem',
  surfaceHub = 'surfaceHub',
  holoLens = 'holoLens',
  unknownFutureValue = 'unknownFutureValue'
}

export enum MicrosoftGraphCallRecordsProductFamily {
  unknown = 'unknown',
  teams = 'teams',
  skypeForBusiness = 'skypeForBusiness',
  lync = 'lync',
  unknownFutureValue = 'unknownFutureValue'
}




export enum MicrosoftGraphCallRecordsFailureStage {
  unknown = 'unknown',
  callSetup = 'callSetup',
  midcall = 'midcall',
  unknownFutureValue = 'unknownFutureValue'
}



export enum MicrosoftGraphCallRecordsNetworkConnectionType {
  unknown = 'unknown',
  wired = 'wired',
  wifi = 'wifi',
  mobile = 'mobile',
  tunnel = 'tunnel',
  unknownFutureValue = 'unknownFutureValue'
}

export enum MicrosoftGraphCallRecordsWifiBand {
  unknown = 'unknown',
  frequency24GHz = 'frequency24GHz',
  frequency50GHz = 'frequency50GHz',
  frequency60GHz = 'frequency60GHz',
  unknownFutureValue = 'unknownFutureValue'
}

export enum MicrosoftGraphCallRecordsWifiRadioType {
  unknown = 'unknown',
  wifi80211a = 'wifi80211a',
  wifi80211b = 'wifi80211b',
  wifi80211g = 'wifi80211g',
  wifi80211n = 'wifi80211n',
  wifi80211ac = 'wifi80211ac',
  wifi80211ax = 'wifi80211ax',
  unknownFutureValue = 'unknownFutureValue'
}


export enum MicrosoftGraphCallRecordsMediaStreamDirection {
  callerToCallee = 'callerToCallee',
  calleeToCaller = 'calleeToCaller'
}


export enum MicrosoftGraphCallRecordsServiceRole {
  unknown = 'unknown',
  customBot = 'customBot',
  skypeForBusinessMicrosoftTeamsGateway = 'skypeForBusinessMicrosoftTeamsGateway',
  skypeForBusinessAudioVideoMcu = 'skypeForBusinessAudioVideoMcu',
  skypeForBusinessApplicationSharingMcu = 'skypeForBusinessApplicationSharingMcu',
  skypeForBusinessCallQueues = 'skypeForBusinessCallQueues',
  skypeForBusinessAutoAttendant = 'skypeForBusinessAutoAttendant',
  mediationServer = 'mediationServer',
  mediationServerCloudConnectorEdition = 'mediationServerCloudConnectorEdition',
  exchangeUnifiedMessagingService = 'exchangeUnifiedMessagingService',
  mediaController = 'mediaController',
  conferencingAnnouncementService = 'conferencingAnnouncementService',
  conferencingAttendant = 'conferencingAttendant',
  audioTeleconferencerController = 'audioTeleconferencerController',
  skypeForBusinessUnifiedCommunicationApplicationPlatform = 'skypeForBusinessUnifiedCommunicationApplicationPlatform',
  responseGroupServiceAnnouncementService = 'responseGroupServiceAnnouncementService',
  gateway = 'gateway',
  skypeTranslator = 'skypeTranslator',
  skypeForBusinessAttendant = 'skypeForBusinessAttendant',
  responseGroupService = 'responseGroupService',
  voicemail = 'voicemail',
  unknownFutureValue = 'unknownFutureValue'
}



export type GraphInvitationInput = {
  invitedUserDisplayName?: Maybe<Scalars['String']>;
  invitedUserEmailAddress: Scalars['String'];
  invitedUserMessageInfo?: Maybe<GraphInvitedUserMessageInfoInput>;
  invitedUserType?: Maybe<Scalars['String']>;
  inviteRedeemUrl?: Maybe<Scalars['String']>;
  inviteRedirectUrl: Scalars['String'];
  sendInvitationMessage?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphInvitedUserMessageInfoInput = {
  ccRecipients?: Maybe<Array<Maybe<GraphRecipientInput>>>;
  customizedMessageBody?: Maybe<Scalars['String']>;
  messageLanguage?: Maybe<Scalars['String']>;
};

export type GraphInvitationUpdateInput = {
  invitedUserDisplayName?: Maybe<Scalars['String']>;
  invitedUserEmailAddress?: Maybe<Scalars['String']>;
  invitedUserMessageInfo?: Maybe<GraphInvitedUserMessageInfoInput>;
  invitedUserType?: Maybe<Scalars['String']>;
  inviteRedeemUrl?: Maybe<Scalars['String']>;
  inviteRedirectUrl?: Maybe<Scalars['String']>;
  sendInvitationMessage?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};

export type GraphUserUpdateInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  ageGroup?: Maybe<Scalars['String']>;
  assignedLicenses?: Maybe<Array<Maybe<GraphAssignedLicenseInput>>>;
  assignedPlans?: Maybe<Array<Maybe<GraphAssignedPlanInput>>>;
  businessPhones?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  consentProvidedForMinor?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  creationType?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  employeeHireDate?: Maybe<Scalars['DateTime']>;
  employeeId?: Maybe<Scalars['String']>;
  employeeOrgData?: Maybe<GraphEmployeeOrgDataInput>;
  employeeType?: Maybe<Scalars['String']>;
  externalUserState?: Maybe<Scalars['String']>;
  externalUserStateChangeDateTime?: Maybe<Scalars['DateTime']>;
  faxNumber?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  identities?: Maybe<Array<Maybe<GraphObjectIdentityInput>>>;
  imAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  isResourceAccount?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastPasswordChangeDateTime?: Maybe<Scalars['DateTime']>;
  legalAgeGroupClassification?: Maybe<Scalars['String']>;
  licenseAssignmentStates?: Maybe<Array<Maybe<GraphLicenseAssignmentStateInput>>>;
  mail?: Maybe<Scalars['String']>;
  mailNickname?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  officeLocation?: Maybe<Scalars['String']>;
  onPremisesDistinguishedName?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesExtensionAttributes?: Maybe<GraphOnPremisesExtensionAttributesInput>;
  onPremisesImmutableId?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSamAccountName?: Maybe<Scalars['String']>;
  onPremisesSecurityIdentifier?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  onPremisesUserPrincipalName?: Maybe<Scalars['String']>;
  otherMails?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordPolicies?: Maybe<Scalars['String']>;
  passwordProfile?: Maybe<GraphPasswordProfileInput>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  provisionedPlans?: Maybe<Array<Maybe<GraphProvisionedPlanInput>>>;
  proxyAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  showInAddressList?: Maybe<Scalars['Boolean']>;
  signInSessionsValidFromDateTime?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  usageLocation?: Maybe<Scalars['String']>;
  userPrincipalName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  mailboxSettings?: Maybe<GraphMailboxSettingsInput>;
  deviceEnrollmentLimit?: Maybe<Scalars['Int']>;
  aboutMe?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  hireDate?: Maybe<Scalars['DateTime']>;
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  mySite?: Maybe<Scalars['String']>;
  pastProjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  preferredName?: Maybe<Scalars['String']>;
  responsibilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  schools?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphIdentityProviderInput = {
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphIdentityProviderUpdateInput = {
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GraphApplicationUpdateInput = {
  addIns?: Maybe<Array<Maybe<GraphAddInInput>>>;
  api?: Maybe<GraphApiApplicationInput>;
  appId?: Maybe<Scalars['String']>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  appRoles?: Maybe<Array<Maybe<GraphAppRoleInput>>>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  groupMembershipClaims?: Maybe<Scalars['String']>;
  identifierUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  info?: Maybe<GraphInformationalUrlInput>;
  isDeviceOnlyAuthSupported?: Maybe<Scalars['Boolean']>;
  isFallbackPublicClient?: Maybe<Scalars['Boolean']>;
  keyCredentials?: Maybe<Array<Maybe<GraphKeyCredentialInput>>>;
  logo?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  oauth2RequirePostResponse?: Maybe<Scalars['Boolean']>;
  optionalClaims?: Maybe<GraphOptionalClaimsInput>;
  parentalControlSettings?: Maybe<GraphParentalControlSettingsInput>;
  passwordCredentials?: Maybe<Array<Maybe<GraphPasswordCredentialInput>>>;
  publicClient?: Maybe<GraphPublicClientApplicationInput>;
  publisherDomain?: Maybe<Scalars['String']>;
  requiredResourceAccess?: Maybe<Array<Maybe<GraphRequiredResourceAccessInput>>>;
  signInAudience?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokenEncryptionKeyId?: Maybe<Scalars['GUID']>;
  web?: Maybe<GraphWebApplicationInput>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphCertificateBasedAuthConfigurationInput = {
  certificateAuthorities: Array<Maybe<GraphCertificateAuthorityInput>>;
  id: Scalars['String'];
};

export type GraphCertificateAuthorityInput = {
  certificate: Scalars['String'];
  certificateRevocationListUrl?: Maybe<Scalars['String']>;
  deltaCertificateRevocationListUrl?: Maybe<Scalars['String']>;
  isRootAuthority: Scalars['Boolean'];
  issuer: Scalars['String'];
  issuerSki: Scalars['String'];
};

export type GraphCertificateBasedAuthConfigurationUpdateInput = {
  certificateAuthorities?: Maybe<Array<Maybe<GraphCertificateAuthorityInput>>>;
};

export type GraphOrgContactInput = {
  addresses?: Maybe<Array<Maybe<GraphPhysicalOfficeAddressInput>>>;
  companyName?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  mailNickname?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  phones?: Maybe<Array<Maybe<GraphPhoneInput>>>;
  proxyAddresses: Array<Maybe<Scalars['String']>>;
  surname?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphPhysicalOfficeAddressInput = {
  city?: Maybe<Scalars['String']>;
  countryOrRegion?: Maybe<Scalars['String']>;
  officeLocation?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type GraphOrgContactUpdateInput = {
  addresses?: Maybe<Array<Maybe<GraphPhysicalOfficeAddressInput>>>;
  companyName?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  mailNickname?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  phones?: Maybe<Array<Maybe<GraphPhoneInput>>>;
  proxyAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  surname?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphContractInput = {
  contractType?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['GUID']>;
  defaultDomainName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphContractUpdateInput = {
  contractType?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['GUID']>;
  defaultDomainName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDeviceInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  alternativeSecurityIds: Array<Maybe<GraphAlternativeSecurityIdInput>>;
  approximateLastSignInDateTime?: Maybe<Scalars['DateTime']>;
  complianceExpirationDateTime?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceMetadata?: Maybe<Scalars['String']>;
  deviceVersion?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  isCompliant?: Maybe<Scalars['Boolean']>;
  isManaged?: Maybe<Scalars['Boolean']>;
  mdmAppId?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  operatingSystem?: Maybe<Scalars['String']>;
  operatingSystemVersion?: Maybe<Scalars['String']>;
  physicalIds: Array<Maybe<Scalars['String']>>;
  profileType?: Maybe<Scalars['String']>;
  systemLabels: Array<Maybe<Scalars['String']>>;
  trustType?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphAlternativeSecurityIdInput = {
  identityProvider?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

export type GraphDeviceUpdateInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  alternativeSecurityIds?: Maybe<Array<Maybe<GraphAlternativeSecurityIdInput>>>;
  approximateLastSignInDateTime?: Maybe<Scalars['DateTime']>;
  complianceExpirationDateTime?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceMetadata?: Maybe<Scalars['String']>;
  deviceVersion?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  isCompliant?: Maybe<Scalars['Boolean']>;
  isManaged?: Maybe<Scalars['Boolean']>;
  mdmAppId?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  operatingSystem?: Maybe<Scalars['String']>;
  operatingSystemVersion?: Maybe<Scalars['String']>;
  physicalIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileType?: Maybe<Scalars['String']>;
  systemLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  trustType?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDirectoryObjectUpdateInput = {
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDirectoryRoleInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  roleTemplateId?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphDirectoryRoleUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  roleTemplateId?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDirectoryRoleTemplateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphDirectoryRoleTemplateUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDomainDnsRecordInput = {
  isOptional: Scalars['Boolean'];
  label: Scalars['String'];
  recordType?: Maybe<Scalars['String']>;
  supportedService: Scalars['String'];
  ttl: Scalars['Int'];
  id: Scalars['String'];
};

export type GraphDomainDnsRecordUpdateInput = {
  isOptional?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  recordType?: Maybe<Scalars['String']>;
  supportedService?: Maybe<Scalars['String']>;
  ttl?: Maybe<Scalars['Int']>;
};

export type GraphDomainUpdateInput = {
  authenticationType?: Maybe<Scalars['String']>;
  availabilityStatus?: Maybe<Scalars['String']>;
  isAdminManaged?: Maybe<Scalars['Boolean']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isInitial?: Maybe<Scalars['Boolean']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  passwordNotificationWindowInDays?: Maybe<Scalars['Int']>;
  passwordValidityPeriodInDays?: Maybe<Scalars['Int']>;
  state?: Maybe<GraphDomainStateInput>;
  supportedServices?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GraphGroupUpdateInput = {
  assignedLabels?: Maybe<Array<Maybe<GraphAssignedLabelInput>>>;
  assignedLicenses?: Maybe<Array<Maybe<GraphAssignedLicenseInput>>>;
  classification?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expirationDateTime?: Maybe<Scalars['DateTime']>;
  groupTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasMembersWithLicenseErrors?: Maybe<Scalars['Boolean']>;
  licenseProcessingState?: Maybe<GraphLicenseProcessingStateInput>;
  mail?: Maybe<Scalars['String']>;
  mailEnabled?: Maybe<Scalars['Boolean']>;
  mailNickname?: Maybe<Scalars['String']>;
  membershipRule?: Maybe<Scalars['String']>;
  membershipRuleProcessingState?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesNetBiosName?: Maybe<Scalars['String']>;
  onPremisesProvisioningErrors?: Maybe<Array<Maybe<GraphOnPremisesProvisioningErrorInput>>>;
  onPremisesSamAccountName?: Maybe<Scalars['String']>;
  onPremisesSecurityIdentifier?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  preferredDataLocation?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  proxyAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  renewedDateTime?: Maybe<Scalars['DateTime']>;
  securityEnabled?: Maybe<Scalars['Boolean']>;
  securityIdentifier?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  allowExternalSenders?: Maybe<Scalars['Boolean']>;
  autoSubscribeNewMembers?: Maybe<Scalars['Boolean']>;
  hideFromAddressLists?: Maybe<Scalars['Boolean']>;
  hideFromOutlookClients?: Maybe<Scalars['Boolean']>;
  isSubscribedByMail?: Maybe<Scalars['Boolean']>;
  unseenCount?: Maybe<Scalars['Int']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphGroupSettingInput = {
  displayName?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  values: Array<Maybe<GraphSettingValueInput>>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphSettingValueInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GraphGroupSettingUpdateInput = {
  displayName?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<GraphSettingValueInput>>>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphGroupSettingTemplateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  values: Array<Maybe<GraphSettingTemplateValueInput>>;
  rest?: Maybe<Scalars['JSON']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
};

export type GraphSettingTemplateValueInput = {
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GraphGroupSettingTemplateUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<GraphSettingTemplateValueInput>>>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphOAuth2PermissionGrantInput = {
  clientId: Scalars['String'];
  consentType?: Maybe<Scalars['String']>;
  principalId?: Maybe<Scalars['String']>;
  resourceId: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphOAuth2PermissionGrantUpdateInput = {
  clientId?: Maybe<Scalars['String']>;
  consentType?: Maybe<Scalars['String']>;
  principalId?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
};

export type GraphOrganizationUpdateInput = {
  assignedPlans?: Maybe<Array<Maybe<GraphAssignedPlanInput>>>;
  businessPhones?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryLetterCode?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  marketingNotificationEmails?: Maybe<Array<Maybe<Scalars['String']>>>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['DateTime']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  postalCode?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  privacyProfile?: Maybe<GraphPrivacyProfileInput>;
  provisionedPlans?: Maybe<Array<Maybe<GraphProvisionedPlanInput>>>;
  securityComplianceNotificationMails?: Maybe<Array<Maybe<Scalars['String']>>>;
  securityComplianceNotificationPhones?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  technicalNotificationMails?: Maybe<Array<Maybe<Scalars['String']>>>;
  tenantType?: Maybe<Scalars['String']>;
  verifiedDomains?: Maybe<Array<Maybe<GraphVerifiedDomainInput>>>;
  mobileDeviceManagementAuthority?: Maybe<GraphMdmAuthority>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphResourceSpecificPermissionGrantInput = {
  clientAppId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  permissionType?: Maybe<Scalars['String']>;
  resourceAppId?: Maybe<Scalars['String']>;
  deletedDateTime?: Maybe<Scalars['DateTime']>;
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphResourceSpecificPermissionGrantUpdateInput = {
  clientAppId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  permissionType?: Maybe<Scalars['String']>;
  resourceAppId?: Maybe<Scalars['String']>;
};

export type GraphScopedRoleMembershipInput = {
  administrativeUnitId: Scalars['String'];
  roleId: Scalars['String'];
  roleMemberInfo: GraphIdentityInput;
  id: Scalars['String'];
};

export type GraphScopedRoleMembershipUpdateInput = {
  administrativeUnitId?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  roleMemberInfo?: Maybe<GraphIdentityInput>;
};

export type GraphServicePrincipalUpdateInput = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  addIns?: Maybe<Array<Maybe<GraphAddInInput>>>;
  alternativeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  appDescription?: Maybe<Scalars['String']>;
  appDisplayName?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  appOwnerOrganizationId?: Maybe<Scalars['GUID']>;
  appRoleAssignmentRequired?: Maybe<Scalars['Boolean']>;
  appRoles?: Maybe<Array<Maybe<GraphAppRoleInput>>>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  info?: Maybe<GraphInformationalUrlInput>;
  keyCredentials?: Maybe<Array<Maybe<GraphKeyCredentialInput>>>;
  loginUrl?: Maybe<Scalars['String']>;
  logoutUrl?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  notificationEmailAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  oauth2PermissionScopes?: Maybe<Array<Maybe<GraphPermissionScopeInput>>>;
  passwordCredentials?: Maybe<Array<Maybe<GraphPasswordCredentialInput>>>;
  preferredSingleSignOnMode?: Maybe<Scalars['String']>;
  preferredTokenSigningKeyThumbprint?: Maybe<Scalars['String']>;
  replyUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  samlSingleSignOnSettings?: Maybe<GraphSamlSingleSignOnSettingsInput>;
  servicePrincipalNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  servicePrincipalType?: Maybe<Scalars['String']>;
  signInAudience?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokenEncryptionKeyId?: Maybe<Scalars['GUID']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphSubscribedSkuInput = {
  appliesTo?: Maybe<Scalars['String']>;
  capabilityStatus?: Maybe<Scalars['String']>;
  consumedUnits?: Maybe<Scalars['Int']>;
  prepaidUnits?: Maybe<GraphLicenseUnitsDetailInput>;
  servicePlans: Array<Maybe<GraphServicePlanInfoInput>>;
  skuId?: Maybe<Scalars['GUID']>;
  skuPartNumber?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphLicenseUnitsDetailInput = {
  enabled?: Maybe<Scalars['Int']>;
  suspended?: Maybe<Scalars['Int']>;
  warning?: Maybe<Scalars['Int']>;
};

export type GraphServicePlanInfoInput = {
  appliesTo?: Maybe<Scalars['String']>;
  provisioningStatus?: Maybe<Scalars['String']>;
  servicePlanId?: Maybe<Scalars['GUID']>;
  servicePlanName?: Maybe<Scalars['String']>;
};

export type GraphSubscribedSkuUpdateInput = {
  appliesTo?: Maybe<Scalars['String']>;
  capabilityStatus?: Maybe<Scalars['String']>;
  consumedUnits?: Maybe<Scalars['Int']>;
  prepaidUnits?: Maybe<GraphLicenseUnitsDetailInput>;
  servicePlans?: Maybe<Array<Maybe<GraphServicePlanInfoInput>>>;
  skuId?: Maybe<Scalars['GUID']>;
  skuPartNumber?: Maybe<Scalars['String']>;
};

export type GraphDriveItemUpdateInput = {
  audio?: Maybe<GraphAudioInput>;
  content?: Maybe<Scalars['String']>;
  cTag?: Maybe<Scalars['String']>;
  deleted?: Maybe<GraphDeletedInput>;
  file?: Maybe<GraphFileInput>;
  fileSystemInfo?: Maybe<GraphFileSystemInfoInput>;
  folder?: Maybe<GraphFolderInput>;
  image?: Maybe<GraphImageInput>;
  location?: Maybe<GraphGeoCoordinatesInput>;
  package?: Maybe<GraphPackageInput>;
  pendingOperations?: Maybe<GraphPendingOperationsInput>;
  photo?: Maybe<GraphPhotoInput>;
  publication?: Maybe<GraphPublicationFacetInput>;
  remoteItem?: Maybe<GraphRemoteItemInput>;
  root?: Maybe<GraphRootInput>;
  searchResult?: Maybe<GraphSearchResultInput>;
  shared?: Maybe<GraphSharedInput>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  size?: Maybe<Scalars['BigInt']>;
  specialFolder?: Maybe<GraphSpecialFolderInput>;
  video?: Maybe<GraphVideoInput>;
  webDavUrl?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphPlaceInput = {
  address?: Maybe<GraphPhysicalAddressInput>;
  displayName: Scalars['String'];
  geoCoordinates?: Maybe<GraphOutlookGeoCoordinatesInput>;
  phone?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphPlaceUpdateInput = {
  address?: Maybe<GraphPhysicalAddressInput>;
  displayName?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<GraphOutlookGeoCoordinatesInput>;
  phone?: Maybe<Scalars['String']>;
};

export type GraphDriveInput = {
  driveType?: Maybe<Scalars['String']>;
  owner?: Maybe<GraphIdentitySetInput>;
  quota?: Maybe<GraphQuotaInput>;
  sharePointIds?: Maybe<GraphSharepointIdsInput>;
  system?: Maybe<GraphSystemFacetInput>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parentReference?: Maybe<GraphItemReferenceInput>;
  webUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphQuotaInput = {
  deleted?: Maybe<Scalars['BigInt']>;
  remaining?: Maybe<Scalars['BigInt']>;
  state?: Maybe<Scalars['String']>;
  storagePlanInformation?: Maybe<GraphStoragePlanInformationInput>;
  total?: Maybe<Scalars['BigInt']>;
  used?: Maybe<Scalars['BigInt']>;
};

export type GraphStoragePlanInformationInput = {
  upgradeAvailable?: Maybe<Scalars['Boolean']>;
};

export type GraphSystemFacetInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphDriveUpdateInput = {
  driveType?: Maybe<Scalars['String']>;
  owner?: Maybe<GraphIdentitySetInput>;
  quota?: Maybe<GraphQuotaInput>;
  sharePointIds?: Maybe<GraphSharepointIdsInput>;
  system?: Maybe<GraphSystemFacetInput>;
};

export type GraphSharedDriveItemInput = {
  owner?: Maybe<GraphIdentitySetInput>;
  createdBy?: Maybe<GraphIdentitySetInput>;
  createdDateTime: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<GraphIdentitySetInput>;
  lastModifiedDateTime: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parentReference?: Maybe<GraphItemReferenceInput>;
  webUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GraphSharedDriveItemUpdateInput = {
  owner?: Maybe<GraphIdentitySetInput>;
};

export type GraphSiteUpdateInput = {
  displayName?: Maybe<Scalars['String']>;
  error?: Maybe<GraphPublicErrorInput>;
  root?: Maybe<GraphRootInput>;
  sharepointIds?: Maybe<GraphSharepointIdsInput>;
  siteCollection?: Maybe<GraphSiteCollectionInput>;
};

export type GraphSchemaExtensionInput = {
  description?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  properties: Array<Maybe<GraphExtensionSchemaPropertyInput>>;
  status: Scalars['String'];
  targetTypes: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
};

export type GraphExtensionSchemaPropertyInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GraphSchemaExtensionUpdateInput = {
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<GraphExtensionSchemaPropertyInput>>>;
  status?: Maybe<Scalars['String']>;
  targetTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GraphGroupLifecyclePolicyUpdateInput = {
  alternateNotificationEmails?: Maybe<Scalars['String']>;
  groupLifetimeInDays?: Maybe<Scalars['Int']>;
  managedGroupTypes?: Maybe<Scalars['String']>;
};

export type GraphDataPolicyOperationInput = {
  completedDateTime?: Maybe<Scalars['DateTime']>;
  progress: Scalars['Float'];
  status?: Maybe<GraphDataPolicyOperationStatus>;
  storageLocation?: Maybe<Scalars['String']>;
  submittedDateTime: Scalars['DateTime'];
  userId: Scalars['String'];
  id: Scalars['String'];
};

export type GraphDataPolicyOperationUpdateInput = {
  completedDateTime?: Maybe<Scalars['DateTime']>;
  progress?: Maybe<Scalars['Float']>;
  status?: Maybe<GraphDataPolicyOperationStatus>;
  storageLocation?: Maybe<Scalars['String']>;
  submittedDateTime?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type GraphSubscriptionInput = {
  applicationId?: Maybe<Scalars['String']>;
  changeType: Scalars['String'];
  clientState?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  encryptionCertificate?: Maybe<Scalars['String']>;
  encryptionCertificateId?: Maybe<Scalars['String']>;
  expirationDateTime: Scalars['DateTime'];
  includeResourceData?: Maybe<Scalars['Boolean']>;
  latestSupportedTlsVersion?: Maybe<Scalars['String']>;
  lifecycleNotificationUrl?: Maybe<Scalars['String']>;
  notificationUrl: Scalars['String'];
  resource: Scalars['String'];
  id: Scalars['String'];
};

export type GraphSubscriptionUpdateInput = {
  applicationId?: Maybe<Scalars['String']>;
  changeType?: Maybe<Scalars['String']>;
  clientState?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  encryptionCertificate?: Maybe<Scalars['String']>;
  encryptionCertificateId?: Maybe<Scalars['String']>;
  expirationDateTime?: Maybe<Scalars['DateTime']>;
  includeResourceData?: Maybe<Scalars['Boolean']>;
  latestSupportedTlsVersion?: Maybe<Scalars['String']>;
  lifecycleNotificationUrl?: Maybe<Scalars['String']>;
  notificationUrl?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
};

export type GraphChatInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphChatUpdateInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphTeamUpdateInput = {
  classification?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  funSettings?: Maybe<GraphTeamFunSettingsInput>;
  guestSettings?: Maybe<GraphTeamGuestSettingsInput>;
  internalId?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  memberSettings?: Maybe<GraphTeamMemberSettingsInput>;
  messagingSettings?: Maybe<GraphTeamMessagingSettingsInput>;
  specialization?: Maybe<GraphTeamSpecialization>;
  visibility?: Maybe<GraphTeamVisibilityType>;
  webUrl?: Maybe<Scalars['String']>;
  rest?: Maybe<Scalars['JSON']>;
};

export type GraphTeamsTemplateInput = {
  rest?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type GraphTeamsTemplateUpdateInput = {
  rest?: Maybe<Scalars['JSON']>;
};

export type FetchRecentEmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchRecentEmailsQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'GraphUser', displayName?: Maybe<string>, officeLocation?: Maybe<string>, messages?: Maybe<Array<Maybe<{ __typename?: 'GraphMessage', subject?: Maybe<string>, isRead?: Maybe<boolean>, from?: Maybe<{ __typename?: 'GraphRecipient', emailAddress?: Maybe<{ __typename?: 'GraphEmailAddress', address?: Maybe<string> }> }> }>>> }> };


export const FetchRecentEmailsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchRecentEmails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"officeLocation"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryOptions"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"top"},"value":{"kind":"IntValue","value":"3"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]};
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    fetchRecentEmails(variables?: FetchRecentEmailsQueryVariables, options?: C): Promise<FetchRecentEmailsQuery> {
      return requester<FetchRecentEmailsQuery, FetchRecentEmailsQueryVariables>(FetchRecentEmailsDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;